# `dataOciJmsFleetInstallationSite` Submodule <a name="`dataOciJmsFleetInstallationSite` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetInstallationSite <a name="DataOciJmsFleetInstallationSite" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site oci_jms_fleet_installation_site}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSite } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite(scope: Construct, id: string, config: DataOciJmsFleetInstallationSiteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig">DataOciJmsFleetInstallationSiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig">DataOciJmsFleetInstallationSiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetInstallationPath">resetInstallationPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreDistribution">resetJreDistribution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreSecurityStatus">resetJreSecurityStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreVendor">resetJreVendor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreVersion">resetJreVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetManagedInstanceId">resetManagedInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetOsFamily">resetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetPathContains">resetPathContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetTimeEnd">resetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetTimeStart">resetTimeStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetApplicationId` <a name="resetApplicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetApplicationId"></a>

```typescript
public resetApplicationId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstallationPath` <a name="resetInstallationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetInstallationPath"></a>

```typescript
public resetInstallationPath(): void
```

##### `resetJreDistribution` <a name="resetJreDistribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreDistribution"></a>

```typescript
public resetJreDistribution(): void
```

##### `resetJreSecurityStatus` <a name="resetJreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreSecurityStatus"></a>

```typescript
public resetJreSecurityStatus(): void
```

##### `resetJreVendor` <a name="resetJreVendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreVendor"></a>

```typescript
public resetJreVendor(): void
```

##### `resetJreVersion` <a name="resetJreVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreVersion"></a>

```typescript
public resetJreVersion(): void
```

##### `resetManagedInstanceId` <a name="resetManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetManagedInstanceId"></a>

```typescript
public resetManagedInstanceId(): void
```

##### `resetOsFamily` <a name="resetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetOsFamily"></a>

```typescript
public resetOsFamily(): void
```

##### `resetPathContains` <a name="resetPathContains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetPathContains"></a>

```typescript
public resetPathContains(): void
```

##### `resetTimeEnd` <a name="resetTimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetTimeEnd"></a>

```typescript
public resetTimeEnd(): void
```

##### `resetTimeStart` <a name="resetTimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetTimeStart"></a>

```typescript
public resetTimeStart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsFleetInstallationSite resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isConstruct"></a>

```typescript
import { dataOciJmsFleetInstallationSite } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformElement"></a>

```typescript
import { dataOciJmsFleetInstallationSite } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformDataSource"></a>

```typescript
import { dataOciJmsFleetInstallationSite } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport"></a>

```typescript
import { dataOciJmsFleetInstallationSite } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciJmsFleetInstallationSite resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciJmsFleetInstallationSite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciJmsFleetInstallationSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetInstallationSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList">DataOciJmsFleetInstallationSiteItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.fleetIdInput">fleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.installationPathInput">installationPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreDistributionInput">jreDistributionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreSecurityStatusInput">jreSecurityStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVendorInput">jreVendorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVersionInput">jreVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.osFamilyInput">osFamilyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.pathContainsInput">pathContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeEndInput">timeEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeStartInput">timeStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.installationPath">installationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreDistribution">jreDistribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreSecurityStatus">jreSecurityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVendor">jreVendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVersion">jreVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.osFamily">osFamily</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.pathContains">pathContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.items"></a>

```typescript
public readonly items: DataOciJmsFleetInstallationSiteItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList">DataOciJmsFleetInstallationSiteItemsList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.fleetIdInput"></a>

```typescript
public readonly fleetIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `installationPathInput`<sup>Optional</sup> <a name="installationPathInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.installationPathInput"></a>

```typescript
public readonly installationPathInput: string;
```

- *Type:* string

---

##### `jreDistributionInput`<sup>Optional</sup> <a name="jreDistributionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreDistributionInput"></a>

```typescript
public readonly jreDistributionInput: string;
```

- *Type:* string

---

##### `jreSecurityStatusInput`<sup>Optional</sup> <a name="jreSecurityStatusInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreSecurityStatusInput"></a>

```typescript
public readonly jreSecurityStatusInput: string;
```

- *Type:* string

---

##### `jreVendorInput`<sup>Optional</sup> <a name="jreVendorInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVendorInput"></a>

```typescript
public readonly jreVendorInput: string;
```

- *Type:* string

---

##### `jreVersionInput`<sup>Optional</sup> <a name="jreVersionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVersionInput"></a>

```typescript
public readonly jreVersionInput: string;
```

- *Type:* string

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.managedInstanceIdInput"></a>

```typescript
public readonly managedInstanceIdInput: string;
```

- *Type:* string

---

##### `osFamilyInput`<sup>Optional</sup> <a name="osFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.osFamilyInput"></a>

```typescript
public readonly osFamilyInput: string[];
```

- *Type:* string[]

---

##### `pathContainsInput`<sup>Optional</sup> <a name="pathContainsInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.pathContainsInput"></a>

```typescript
public readonly pathContainsInput: string;
```

- *Type:* string

---

##### `timeEndInput`<sup>Optional</sup> <a name="timeEndInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeEndInput"></a>

```typescript
public readonly timeEndInput: string;
```

- *Type:* string

---

##### `timeStartInput`<sup>Optional</sup> <a name="timeStartInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeStartInput"></a>

```typescript
public readonly timeStartInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installationPath`<sup>Required</sup> <a name="installationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.installationPath"></a>

```typescript
public readonly installationPath: string;
```

- *Type:* string

---

##### `jreDistribution`<sup>Required</sup> <a name="jreDistribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreDistribution"></a>

```typescript
public readonly jreDistribution: string;
```

- *Type:* string

---

##### `jreSecurityStatus`<sup>Required</sup> <a name="jreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreSecurityStatus"></a>

```typescript
public readonly jreSecurityStatus: string;
```

- *Type:* string

---

##### `jreVendor`<sup>Required</sup> <a name="jreVendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVendor"></a>

```typescript
public readonly jreVendor: string;
```

- *Type:* string

---

##### `jreVersion`<sup>Required</sup> <a name="jreVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVersion"></a>

```typescript
public readonly jreVersion: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.osFamily"></a>

```typescript
public readonly osFamily: string[];
```

- *Type:* string[]

---

##### `pathContains`<sup>Required</sup> <a name="pathContains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.pathContains"></a>

```typescript
public readonly pathContains: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetInstallationSiteConfig <a name="DataOciJmsFleetInstallationSiteConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSite } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetInstallationSiteConfig: dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.fleetId">fleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#fleet_id DataOciJmsFleetInstallationSite#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#application_id DataOciJmsFleetInstallationSite#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#id DataOciJmsFleetInstallationSite#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.installationPath">installationPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#installation_path DataOciJmsFleetInstallationSite#installation_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreDistribution">jreDistribution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_distribution DataOciJmsFleetInstallationSite#jre_distribution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreSecurityStatus">jreSecurityStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_security_status DataOciJmsFleetInstallationSite#jre_security_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreVendor">jreVendor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_vendor DataOciJmsFleetInstallationSite#jre_vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreVersion">jreVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_version DataOciJmsFleetInstallationSite#jre_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#managed_instance_id DataOciJmsFleetInstallationSite#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.osFamily">osFamily</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#os_family DataOciJmsFleetInstallationSite#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.pathContains">pathContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#path_contains DataOciJmsFleetInstallationSite#path_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.timeEnd">timeEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#time_end DataOciJmsFleetInstallationSite#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.timeStart">timeStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#time_start DataOciJmsFleetInstallationSite#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#fleet_id DataOciJmsFleetInstallationSite#fleet_id}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#application_id DataOciJmsFleetInstallationSite#application_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#id DataOciJmsFleetInstallationSite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installationPath`<sup>Optional</sup> <a name="installationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.installationPath"></a>

```typescript
public readonly installationPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#installation_path DataOciJmsFleetInstallationSite#installation_path}.

---

##### `jreDistribution`<sup>Optional</sup> <a name="jreDistribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreDistribution"></a>

```typescript
public readonly jreDistribution: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_distribution DataOciJmsFleetInstallationSite#jre_distribution}.

---

##### `jreSecurityStatus`<sup>Optional</sup> <a name="jreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreSecurityStatus"></a>

```typescript
public readonly jreSecurityStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_security_status DataOciJmsFleetInstallationSite#jre_security_status}.

---

##### `jreVendor`<sup>Optional</sup> <a name="jreVendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreVendor"></a>

```typescript
public readonly jreVendor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_vendor DataOciJmsFleetInstallationSite#jre_vendor}.

---

##### `jreVersion`<sup>Optional</sup> <a name="jreVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreVersion"></a>

```typescript
public readonly jreVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_version DataOciJmsFleetInstallationSite#jre_version}.

---

##### `managedInstanceId`<sup>Optional</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#managed_instance_id DataOciJmsFleetInstallationSite#managed_instance_id}.

---

##### `osFamily`<sup>Optional</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.osFamily"></a>

```typescript
public readonly osFamily: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#os_family DataOciJmsFleetInstallationSite#os_family}.

---

##### `pathContains`<sup>Optional</sup> <a name="pathContains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.pathContains"></a>

```typescript
public readonly pathContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#path_contains DataOciJmsFleetInstallationSite#path_contains}.

---

##### `timeEnd`<sup>Optional</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#time_end DataOciJmsFleetInstallationSite#time_end}.

---

##### `timeStart`<sup>Optional</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#time_start DataOciJmsFleetInstallationSite#time_start}.

---

### DataOciJmsFleetInstallationSiteItems <a name="DataOciJmsFleetInstallationSiteItems" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItems.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSite } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetInstallationSiteItems: dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItems = { ... }
```


### DataOciJmsFleetInstallationSiteItemsBlocklistStruct <a name="DataOciJmsFleetInstallationSiteItemsBlocklistStruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStruct.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSite } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetInstallationSiteItemsBlocklistStruct: dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStruct = { ... }
```


### DataOciJmsFleetInstallationSiteItemsJre <a name="DataOciJmsFleetInstallationSiteItemsJre" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJre"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJre.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSite } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetInstallationSiteItemsJre: dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJre = { ... }
```


### DataOciJmsFleetInstallationSiteItemsOperatingSystem <a name="DataOciJmsFleetInstallationSiteItemsOperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystem"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystem.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSite } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetInstallationSiteItemsOperatingSystem: dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystem = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsFleetInstallationSiteItemsBlocklistStructList <a name="DataOciJmsFleetInstallationSiteItemsBlocklistStructList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSite } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.get"></a>

```typescript
public get(index: number): DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference <a name="DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSite } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStruct">DataOciJmsFleetInstallationSiteItemsBlocklistStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsFleetInstallationSiteItemsBlocklistStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStruct">DataOciJmsFleetInstallationSiteItemsBlocklistStruct</a>

---


### DataOciJmsFleetInstallationSiteItemsJreList <a name="DataOciJmsFleetInstallationSiteItemsJreList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSite } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.get"></a>

```typescript
public get(index: number): DataOciJmsFleetInstallationSiteItemsJreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsFleetInstallationSiteItemsJreOutputReference <a name="DataOciJmsFleetInstallationSiteItemsJreOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSite } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.distribution">distribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.jreKey">jreKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.vendor">vendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJre">DataOciJmsFleetInstallationSiteItemsJre</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.distribution"></a>

```typescript
public readonly distribution: string;
```

- *Type:* string

---

##### `jreKey`<sup>Required</sup> <a name="jreKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.jreKey"></a>

```typescript
public readonly jreKey: string;
```

- *Type:* string

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsFleetInstallationSiteItemsJre;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJre">DataOciJmsFleetInstallationSiteItemsJre</a>

---


### DataOciJmsFleetInstallationSiteItemsList <a name="DataOciJmsFleetInstallationSiteItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSite } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.get"></a>

```typescript
public get(index: number): DataOciJmsFleetInstallationSiteItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsFleetInstallationSiteItemsOperatingSystemList <a name="DataOciJmsFleetInstallationSiteItemsOperatingSystemList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSite } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.get"></a>

```typescript
public get(index: number): DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference <a name="DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSite } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.managedInstanceCount">managedInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystem">DataOciJmsFleetInstallationSiteItemsOperatingSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `family`<sup>Required</sup> <a name="family" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `managedInstanceCount`<sup>Required</sup> <a name="managedInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.managedInstanceCount"></a>

```typescript
public readonly managedInstanceCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsFleetInstallationSiteItemsOperatingSystem;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystem">DataOciJmsFleetInstallationSiteItemsOperatingSystem</a>

---


### DataOciJmsFleetInstallationSiteItemsOutputReference <a name="DataOciJmsFleetInstallationSiteItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSite } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.approximateApplicationCount">approximateApplicationCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.blocklist">blocklist</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList">DataOciJmsFleetInstallationSiteItemsBlocklistStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.installationKey">installationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.jre">jre</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList">DataOciJmsFleetInstallationSiteItemsJreList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.operatingSystem">operatingSystem</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList">DataOciJmsFleetInstallationSiteItemsOperatingSystemList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.securityStatus">securityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.timeLastSeen">timeLastSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItems">DataOciJmsFleetInstallationSiteItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approximateApplicationCount`<sup>Required</sup> <a name="approximateApplicationCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.approximateApplicationCount"></a>

```typescript
public readonly approximateApplicationCount: number;
```

- *Type:* number

---

##### `blocklist`<sup>Required</sup> <a name="blocklist" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.blocklist"></a>

```typescript
public readonly blocklist: DataOciJmsFleetInstallationSiteItemsBlocklistStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList">DataOciJmsFleetInstallationSiteItemsBlocklistStructList</a>

---

##### `installationKey`<sup>Required</sup> <a name="installationKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.installationKey"></a>

```typescript
public readonly installationKey: string;
```

- *Type:* string

---

##### `jre`<sup>Required</sup> <a name="jre" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.jre"></a>

```typescript
public readonly jre: DataOciJmsFleetInstallationSiteItemsJreList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList">DataOciJmsFleetInstallationSiteItemsJreList</a>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: DataOciJmsFleetInstallationSiteItemsOperatingSystemList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList">DataOciJmsFleetInstallationSiteItemsOperatingSystemList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `securityStatus`<sup>Required</sup> <a name="securityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.securityStatus"></a>

```typescript
public readonly securityStatus: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeLastSeen`<sup>Required</sup> <a name="timeLastSeen" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.timeLastSeen"></a>

```typescript
public readonly timeLastSeen: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsFleetInstallationSiteItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItems">DataOciJmsFleetInstallationSiteItems</a>

---



