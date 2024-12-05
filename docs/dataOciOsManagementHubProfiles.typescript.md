# `dataOciOsManagementHubProfiles` Submodule <a name="`dataOciOsManagementHubProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubProfiles <a name="DataOciOsManagementHubProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles oci_os_management_hub_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles(scope: Construct, id: string, config?: DataOciOsManagementHubProfilesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig">DataOciOsManagementHubProfilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig">DataOciOsManagementHubProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetArchType">resetArchType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetIsDefaultProfile">resetIsDefaultProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetIsServiceProvidedProfile">resetIsServiceProvidedProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetOsFamily">resetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetProfileId">resetProfileId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetProfileType">resetProfileType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetRegistrationType">resetRegistrationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetVendorName">resetVendorName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsManagementHubProfilesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a>[]

---

##### `resetArchType` <a name="resetArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetArchType"></a>

```typescript
public resetArchType(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetDisplayNameContains"></a>

```typescript
public resetDisplayNameContains(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsDefaultProfile` <a name="resetIsDefaultProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetIsDefaultProfile"></a>

```typescript
public resetIsDefaultProfile(): void
```

##### `resetIsServiceProvidedProfile` <a name="resetIsServiceProvidedProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetIsServiceProvidedProfile"></a>

```typescript
public resetIsServiceProvidedProfile(): void
```

##### `resetOsFamily` <a name="resetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetOsFamily"></a>

```typescript
public resetOsFamily(): void
```

##### `resetProfileId` <a name="resetProfileId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetProfileId"></a>

```typescript
public resetProfileId(): void
```

##### `resetProfileType` <a name="resetProfileType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetProfileType"></a>

```typescript
public resetProfileType(): void
```

##### `resetRegistrationType` <a name="resetRegistrationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetRegistrationType"></a>

```typescript
public resetRegistrationType(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetState"></a>

```typescript
public resetState(): void
```

##### `resetVendorName` <a name="resetVendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.resetVendorName"></a>

```typescript
public resetVendorName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isConstruct"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isTerraformElement"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isTerraformDataSource"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.generateConfigForImport"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsManagementHubProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList">DataOciOsManagementHubProfilesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileCollection">profileCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList">DataOciOsManagementHubProfilesProfileCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.archTypeInput">archTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.displayNameInput">displayNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.isDefaultProfileInput">isDefaultProfileInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.isServiceProvidedProfileInput">isServiceProvidedProfileInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.osFamilyInput">osFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileIdInput">profileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileTypeInput">profileTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.registrationTypeInput">registrationTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.vendorNameInput">vendorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.archType">archType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.displayName">displayName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.isDefaultProfile">isDefaultProfile</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.isServiceProvidedProfile">isServiceProvidedProfile</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileType">profileType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.registrationType">registrationType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.vendorName">vendorName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.filter"></a>

```typescript
public readonly filter: DataOciOsManagementHubProfilesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList">DataOciOsManagementHubProfilesFilterList</a>

---

##### `profileCollection`<sup>Required</sup> <a name="profileCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileCollection"></a>

```typescript
public readonly profileCollection: DataOciOsManagementHubProfilesProfileCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList">DataOciOsManagementHubProfilesProfileCollectionList</a>

---

##### `archTypeInput`<sup>Optional</sup> <a name="archTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.archTypeInput"></a>

```typescript
public readonly archTypeInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.displayNameContainsInput"></a>

```typescript
public readonly displayNameContainsInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsManagementHubProfilesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isDefaultProfileInput`<sup>Optional</sup> <a name="isDefaultProfileInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.isDefaultProfileInput"></a>

```typescript
public readonly isDefaultProfileInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isServiceProvidedProfileInput`<sup>Optional</sup> <a name="isServiceProvidedProfileInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.isServiceProvidedProfileInput"></a>

```typescript
public readonly isServiceProvidedProfileInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `osFamilyInput`<sup>Optional</sup> <a name="osFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.osFamilyInput"></a>

```typescript
public readonly osFamilyInput: string;
```

- *Type:* string

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileIdInput"></a>

```typescript
public readonly profileIdInput: string;
```

- *Type:* string

---

##### `profileTypeInput`<sup>Optional</sup> <a name="profileTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileTypeInput"></a>

```typescript
public readonly profileTypeInput: string[];
```

- *Type:* string[]

---

##### `registrationTypeInput`<sup>Optional</sup> <a name="registrationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.registrationTypeInput"></a>

```typescript
public readonly registrationTypeInput: string[];
```

- *Type:* string[]

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `vendorNameInput`<sup>Optional</sup> <a name="vendorNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.vendorNameInput"></a>

```typescript
public readonly vendorNameInput: string;
```

- *Type:* string

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.archType"></a>

```typescript
public readonly archType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.displayName"></a>

```typescript
public readonly displayName: string[];
```

- *Type:* string[]

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDefaultProfile`<sup>Required</sup> <a name="isDefaultProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.isDefaultProfile"></a>

```typescript
public readonly isDefaultProfile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isServiceProvidedProfile`<sup>Required</sup> <a name="isServiceProvidedProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.isServiceProvidedProfile"></a>

```typescript
public readonly isServiceProvidedProfile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `profileType`<sup>Required</sup> <a name="profileType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.profileType"></a>

```typescript
public readonly profileType: string[];
```

- *Type:* string[]

---

##### `registrationType`<sup>Required</sup> <a name="registrationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.registrationType"></a>

```typescript
public readonly registrationType: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.vendorName"></a>

```typescript
public readonly vendorName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfiles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubProfilesConfig <a name="DataOciOsManagementHubProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubProfilesConfig: dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.archType">archType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#arch_type DataOciOsManagementHubProfiles#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#compartment_id DataOciOsManagementHubProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.displayName">displayName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#display_name DataOciOsManagementHubProfiles#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#display_name_contains DataOciOsManagementHubProfiles#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#id DataOciOsManagementHubProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.isDefaultProfile">isDefaultProfile</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#is_default_profile DataOciOsManagementHubProfiles#is_default_profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.isServiceProvidedProfile">isServiceProvidedProfile</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#is_service_provided_profile DataOciOsManagementHubProfiles#is_service_provided_profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.osFamily">osFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#os_family DataOciOsManagementHubProfiles#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.profileId">profileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#profile_id DataOciOsManagementHubProfiles#profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.profileType">profileType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#profile_type DataOciOsManagementHubProfiles#profile_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.registrationType">registrationType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#registration_type DataOciOsManagementHubProfiles#registration_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#state DataOciOsManagementHubProfiles#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.vendorName">vendorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#vendor_name DataOciOsManagementHubProfiles#vendor_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `archType`<sup>Optional</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.archType"></a>

```typescript
public readonly archType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#arch_type DataOciOsManagementHubProfiles#arch_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#compartment_id DataOciOsManagementHubProfiles#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.displayName"></a>

```typescript
public readonly displayName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#display_name DataOciOsManagementHubProfiles#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#display_name_contains DataOciOsManagementHubProfiles#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsManagementHubProfilesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#filter DataOciOsManagementHubProfiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#id DataOciOsManagementHubProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefaultProfile`<sup>Optional</sup> <a name="isDefaultProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.isDefaultProfile"></a>

```typescript
public readonly isDefaultProfile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#is_default_profile DataOciOsManagementHubProfiles#is_default_profile}.

---

##### `isServiceProvidedProfile`<sup>Optional</sup> <a name="isServiceProvidedProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.isServiceProvidedProfile"></a>

```typescript
public readonly isServiceProvidedProfile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#is_service_provided_profile DataOciOsManagementHubProfiles#is_service_provided_profile}.

---

##### `osFamily`<sup>Optional</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#os_family DataOciOsManagementHubProfiles#os_family}.

---

##### `profileId`<sup>Optional</sup> <a name="profileId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#profile_id DataOciOsManagementHubProfiles#profile_id}.

---

##### `profileType`<sup>Optional</sup> <a name="profileType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.profileType"></a>

```typescript
public readonly profileType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#profile_type DataOciOsManagementHubProfiles#profile_type}.

---

##### `registrationType`<sup>Optional</sup> <a name="registrationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.registrationType"></a>

```typescript
public readonly registrationType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#registration_type DataOciOsManagementHubProfiles#registration_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#state DataOciOsManagementHubProfiles#state}.

---

##### `vendorName`<sup>Optional</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesConfig.property.vendorName"></a>

```typescript
public readonly vendorName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#vendor_name DataOciOsManagementHubProfiles#vendor_name}.

---

### DataOciOsManagementHubProfilesFilter <a name="DataOciOsManagementHubProfilesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubProfilesFilter: dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#name DataOciOsManagementHubProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#values DataOciOsManagementHubProfiles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#regex DataOciOsManagementHubProfiles#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#name DataOciOsManagementHubProfiles#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#values DataOciOsManagementHubProfiles#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_profiles#regex DataOciOsManagementHubProfiles#regex}.

---

### DataOciOsManagementHubProfilesProfileCollection <a name="DataOciOsManagementHubProfilesProfileCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollection.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubProfilesProfileCollection: dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollection = { ... }
```


### DataOciOsManagementHubProfilesProfileCollectionItems <a name="DataOciOsManagementHubProfilesProfileCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItems.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubProfilesProfileCollectionItems: dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItems = { ... }
```


### DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment <a name="DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment: dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment = { ... }
```


### DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage <a name="DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage: dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage = { ... }
```


### DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup <a name="DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup: dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup = { ... }
```


### DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources <a name="DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources: dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubProfilesFilterList <a name="DataOciOsManagementHubProfilesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubProfilesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubProfilesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a>[]

---


### DataOciOsManagementHubProfilesFilterOutputReference <a name="DataOciOsManagementHubProfilesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubProfilesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesFilter">DataOciOsManagementHubProfilesFilter</a>

---


### DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList <a name="DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference <a name="DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment">DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment">DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironment</a>

---


### DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList <a name="DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference <a name="DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage">DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage">DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStage</a>

---


### DataOciOsManagementHubProfilesProfileCollectionItemsList <a name="DataOciOsManagementHubProfilesProfileCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList <a name="DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference <a name="DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup">DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup">DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroup</a>

---


### DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference <a name="DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.archType">archType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.isDefaultProfile">isDefaultProfile</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.isServiceProvidedProfile">isServiceProvidedProfile</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.lifecycleEnvironment">lifecycleEnvironment</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList">DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.lifecycleStage">lifecycleStage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList">DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.lifecycleStageId">lifecycleStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.managedInstanceGroup">managedInstanceGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList">DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.managementStationId">managementStationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.profileType">profileType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.registrationType">registrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.softwareSourceIds">softwareSourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.softwareSources">softwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList">DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.vendorName">vendorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItems">DataOciOsManagementHubProfilesProfileCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.archType"></a>

```typescript
public readonly archType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDefaultProfile`<sup>Required</sup> <a name="isDefaultProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.isDefaultProfile"></a>

```typescript
public readonly isDefaultProfile: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isServiceProvidedProfile`<sup>Required</sup> <a name="isServiceProvidedProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.isServiceProvidedProfile"></a>

```typescript
public readonly isServiceProvidedProfile: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleEnvironment`<sup>Required</sup> <a name="lifecycleEnvironment" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.lifecycleEnvironment"></a>

```typescript
public readonly lifecycleEnvironment: DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList">DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleEnvironmentList</a>

---

##### `lifecycleStage`<sup>Required</sup> <a name="lifecycleStage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.lifecycleStage"></a>

```typescript
public readonly lifecycleStage: DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList">DataOciOsManagementHubProfilesProfileCollectionItemsLifecycleStageList</a>

---

##### `lifecycleStageId`<sup>Required</sup> <a name="lifecycleStageId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.lifecycleStageId"></a>

```typescript
public readonly lifecycleStageId: string;
```

- *Type:* string

---

##### `managedInstanceGroup`<sup>Required</sup> <a name="managedInstanceGroup" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.managedInstanceGroup"></a>

```typescript
public readonly managedInstanceGroup: DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList">DataOciOsManagementHubProfilesProfileCollectionItemsManagedInstanceGroupList</a>

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

---

##### `managementStationId`<sup>Required</sup> <a name="managementStationId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.managementStationId"></a>

```typescript
public readonly managementStationId: string;
```

- *Type:* string

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

##### `profileType`<sup>Required</sup> <a name="profileType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.profileType"></a>

```typescript
public readonly profileType: string;
```

- *Type:* string

---

##### `registrationType`<sup>Required</sup> <a name="registrationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.registrationType"></a>

```typescript
public readonly registrationType: string;
```

- *Type:* string

---

##### `softwareSourceIds`<sup>Required</sup> <a name="softwareSourceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.softwareSourceIds"></a>

```typescript
public readonly softwareSourceIds: string[];
```

- *Type:* string[]

---

##### `softwareSources`<sup>Required</sup> <a name="softwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.softwareSources"></a>

```typescript
public readonly softwareSources: DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList">DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.vendorName"></a>

```typescript
public readonly vendorName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubProfilesProfileCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItems">DataOciOsManagementHubProfilesProfileCollectionItems</a>

---


### DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList <a name="DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference <a name="DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">isMandatoryForAutonomousLinux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType">softwareSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources">DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isMandatoryForAutonomousLinux`<sup>Required</sup> <a name="isMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```typescript
public readonly isMandatoryForAutonomousLinux: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `softwareSourceType`<sup>Required</sup> <a name="softwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```typescript
public readonly softwareSourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources">DataOciOsManagementHubProfilesProfileCollectionItemsSoftwareSources</a>

---


### DataOciOsManagementHubProfilesProfileCollectionList <a name="DataOciOsManagementHubProfilesProfileCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubProfilesProfileCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubProfilesProfileCollectionOutputReference <a name="DataOciOsManagementHubProfilesProfileCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList">DataOciOsManagementHubProfilesProfileCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollection">DataOciOsManagementHubProfilesProfileCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOsManagementHubProfilesProfileCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionItemsList">DataOciOsManagementHubProfilesProfileCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubProfilesProfileCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubProfiles.DataOciOsManagementHubProfilesProfileCollection">DataOciOsManagementHubProfilesProfileCollection</a>

---



