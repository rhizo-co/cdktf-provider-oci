# `dataOciDataSafeUserAssessmentProfiles` Submodule <a name="`dataOciDataSafeUserAssessmentProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeUserAssessmentProfiles <a name="DataOciDataSafeUserAssessmentProfiles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles oci_data_safe_user_assessment_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles(scope: Construct, id: string, config: DataOciDataSafeUserAssessmentProfilesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig">DataOciDataSafeUserAssessmentProfilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig">DataOciDataSafeUserAssessmentProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFailedLoginAttemptsGreaterThanOrEqual">resetFailedLoginAttemptsGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFailedLoginAttemptsLessThan">resetFailedLoginAttemptsLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetInactiveAccountTimeGreaterThanOrEqual">resetInactiveAccountTimeGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetInactiveAccountTimeLessThan">resetInactiveAccountTimeLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetIsUserCreated">resetIsUserCreated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordLockTimeGreaterThanOrEqual">resetPasswordLockTimeGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordLockTimeLessThan">resetPasswordLockTimeLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordVerificationFunction">resetPasswordVerificationFunction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetProfileName">resetProfileName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetSessionsPerUserGreaterThanOrEqual">resetSessionsPerUserGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetSessionsPerUserLessThan">resetSessionsPerUserLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetUserCountGreaterThanOrEqual">resetUserCountGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetUserCountLessThan">resetUserCountLessThan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeUserAssessmentProfilesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFailedLoginAttemptsGreaterThanOrEqual` <a name="resetFailedLoginAttemptsGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFailedLoginAttemptsGreaterThanOrEqual"></a>

```typescript
public resetFailedLoginAttemptsGreaterThanOrEqual(): void
```

##### `resetFailedLoginAttemptsLessThan` <a name="resetFailedLoginAttemptsLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFailedLoginAttemptsLessThan"></a>

```typescript
public resetFailedLoginAttemptsLessThan(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInactiveAccountTimeGreaterThanOrEqual` <a name="resetInactiveAccountTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetInactiveAccountTimeGreaterThanOrEqual"></a>

```typescript
public resetInactiveAccountTimeGreaterThanOrEqual(): void
```

##### `resetInactiveAccountTimeLessThan` <a name="resetInactiveAccountTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetInactiveAccountTimeLessThan"></a>

```typescript
public resetInactiveAccountTimeLessThan(): void
```

##### `resetIsUserCreated` <a name="resetIsUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetIsUserCreated"></a>

```typescript
public resetIsUserCreated(): void
```

##### `resetPasswordLockTimeGreaterThanOrEqual` <a name="resetPasswordLockTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordLockTimeGreaterThanOrEqual"></a>

```typescript
public resetPasswordLockTimeGreaterThanOrEqual(): void
```

##### `resetPasswordLockTimeLessThan` <a name="resetPasswordLockTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordLockTimeLessThan"></a>

```typescript
public resetPasswordLockTimeLessThan(): void
```

##### `resetPasswordVerificationFunction` <a name="resetPasswordVerificationFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordVerificationFunction"></a>

```typescript
public resetPasswordVerificationFunction(): void
```

##### `resetProfileName` <a name="resetProfileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetProfileName"></a>

```typescript
public resetProfileName(): void
```

##### `resetSessionsPerUserGreaterThanOrEqual` <a name="resetSessionsPerUserGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetSessionsPerUserGreaterThanOrEqual"></a>

```typescript
public resetSessionsPerUserGreaterThanOrEqual(): void
```

##### `resetSessionsPerUserLessThan` <a name="resetSessionsPerUserLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetSessionsPerUserLessThan"></a>

```typescript
public resetSessionsPerUserLessThan(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

##### `resetUserCountGreaterThanOrEqual` <a name="resetUserCountGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetUserCountGreaterThanOrEqual"></a>

```typescript
public resetUserCountGreaterThanOrEqual(): void
```

##### `resetUserCountLessThan` <a name="resetUserCountLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetUserCountLessThan"></a>

```typescript
public resetUserCountLessThan(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeUserAssessmentProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isConstruct"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformElement"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeUserAssessmentProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeUserAssessmentProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeUserAssessmentProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeUserAssessmentProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList">DataOciDataSafeUserAssessmentProfilesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profiles">profiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList">DataOciDataSafeUserAssessmentProfilesProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsGreaterThanOrEqualInput">failedLoginAttemptsGreaterThanOrEqualInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsLessThanInput">failedLoginAttemptsLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeGreaterThanOrEqualInput">inactiveAccountTimeGreaterThanOrEqualInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeLessThanInput">inactiveAccountTimeLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.isUserCreatedInput">isUserCreatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeGreaterThanOrEqualInput">passwordLockTimeGreaterThanOrEqualInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeLessThanInput">passwordLockTimeLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordVerificationFunctionInput">passwordVerificationFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profileNameInput">profileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserGreaterThanOrEqualInput">sessionsPerUserGreaterThanOrEqualInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserLessThanInput">sessionsPerUserLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userAssessmentIdInput">userAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountGreaterThanOrEqualInput">userCountGreaterThanOrEqualInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountLessThanInput">userCountLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsGreaterThanOrEqual">failedLoginAttemptsGreaterThanOrEqual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsLessThan">failedLoginAttemptsLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeGreaterThanOrEqual">inactiveAccountTimeGreaterThanOrEqual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeLessThan">inactiveAccountTimeLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.isUserCreated">isUserCreated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeGreaterThanOrEqual">passwordLockTimeGreaterThanOrEqual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeLessThan">passwordLockTimeLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordVerificationFunction">passwordVerificationFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserGreaterThanOrEqual">sessionsPerUserGreaterThanOrEqual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserLessThan">sessionsPerUserLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userAssessmentId">userAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountGreaterThanOrEqual">userCountGreaterThanOrEqual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountLessThan">userCountLessThan</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeUserAssessmentProfilesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList">DataOciDataSafeUserAssessmentProfilesFilterList</a>

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profiles"></a>

```typescript
public readonly profiles: DataOciDataSafeUserAssessmentProfilesProfilesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList">DataOciDataSafeUserAssessmentProfilesProfilesList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failedLoginAttemptsGreaterThanOrEqualInput`<sup>Optional</sup> <a name="failedLoginAttemptsGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsGreaterThanOrEqualInput"></a>

```typescript
public readonly failedLoginAttemptsGreaterThanOrEqualInput: string;
```

- *Type:* string

---

##### `failedLoginAttemptsLessThanInput`<sup>Optional</sup> <a name="failedLoginAttemptsLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsLessThanInput"></a>

```typescript
public readonly failedLoginAttemptsLessThanInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeUserAssessmentProfilesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inactiveAccountTimeGreaterThanOrEqualInput`<sup>Optional</sup> <a name="inactiveAccountTimeGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeGreaterThanOrEqualInput"></a>

```typescript
public readonly inactiveAccountTimeGreaterThanOrEqualInput: string;
```

- *Type:* string

---

##### `inactiveAccountTimeLessThanInput`<sup>Optional</sup> <a name="inactiveAccountTimeLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeLessThanInput"></a>

```typescript
public readonly inactiveAccountTimeLessThanInput: string;
```

- *Type:* string

---

##### `isUserCreatedInput`<sup>Optional</sup> <a name="isUserCreatedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.isUserCreatedInput"></a>

```typescript
public readonly isUserCreatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordLockTimeGreaterThanOrEqualInput`<sup>Optional</sup> <a name="passwordLockTimeGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeGreaterThanOrEqualInput"></a>

```typescript
public readonly passwordLockTimeGreaterThanOrEqualInput: string;
```

- *Type:* string

---

##### `passwordLockTimeLessThanInput`<sup>Optional</sup> <a name="passwordLockTimeLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeLessThanInput"></a>

```typescript
public readonly passwordLockTimeLessThanInput: string;
```

- *Type:* string

---

##### `passwordVerificationFunctionInput`<sup>Optional</sup> <a name="passwordVerificationFunctionInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordVerificationFunctionInput"></a>

```typescript
public readonly passwordVerificationFunctionInput: string;
```

- *Type:* string

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profileNameInput"></a>

```typescript
public readonly profileNameInput: string;
```

- *Type:* string

---

##### `sessionsPerUserGreaterThanOrEqualInput`<sup>Optional</sup> <a name="sessionsPerUserGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserGreaterThanOrEqualInput"></a>

```typescript
public readonly sessionsPerUserGreaterThanOrEqualInput: string;
```

- *Type:* string

---

##### `sessionsPerUserLessThanInput`<sup>Optional</sup> <a name="sessionsPerUserLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserLessThanInput"></a>

```typescript
public readonly sessionsPerUserLessThanInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `userAssessmentIdInput`<sup>Optional</sup> <a name="userAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userAssessmentIdInput"></a>

```typescript
public readonly userAssessmentIdInput: string;
```

- *Type:* string

---

##### `userCountGreaterThanOrEqualInput`<sup>Optional</sup> <a name="userCountGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountGreaterThanOrEqualInput"></a>

```typescript
public readonly userCountGreaterThanOrEqualInput: string;
```

- *Type:* string

---

##### `userCountLessThanInput`<sup>Optional</sup> <a name="userCountLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountLessThanInput"></a>

```typescript
public readonly userCountLessThanInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failedLoginAttemptsGreaterThanOrEqual`<sup>Required</sup> <a name="failedLoginAttemptsGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsGreaterThanOrEqual"></a>

```typescript
public readonly failedLoginAttemptsGreaterThanOrEqual: string;
```

- *Type:* string

---

##### `failedLoginAttemptsLessThan`<sup>Required</sup> <a name="failedLoginAttemptsLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsLessThan"></a>

```typescript
public readonly failedLoginAttemptsLessThan: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inactiveAccountTimeGreaterThanOrEqual`<sup>Required</sup> <a name="inactiveAccountTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeGreaterThanOrEqual"></a>

```typescript
public readonly inactiveAccountTimeGreaterThanOrEqual: string;
```

- *Type:* string

---

##### `inactiveAccountTimeLessThan`<sup>Required</sup> <a name="inactiveAccountTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeLessThan"></a>

```typescript
public readonly inactiveAccountTimeLessThan: string;
```

- *Type:* string

---

##### `isUserCreated`<sup>Required</sup> <a name="isUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.isUserCreated"></a>

```typescript
public readonly isUserCreated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordLockTimeGreaterThanOrEqual`<sup>Required</sup> <a name="passwordLockTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeGreaterThanOrEqual"></a>

```typescript
public readonly passwordLockTimeGreaterThanOrEqual: string;
```

- *Type:* string

---

##### `passwordLockTimeLessThan`<sup>Required</sup> <a name="passwordLockTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeLessThan"></a>

```typescript
public readonly passwordLockTimeLessThan: string;
```

- *Type:* string

---

##### `passwordVerificationFunction`<sup>Required</sup> <a name="passwordVerificationFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordVerificationFunction"></a>

```typescript
public readonly passwordVerificationFunction: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `sessionsPerUserGreaterThanOrEqual`<sup>Required</sup> <a name="sessionsPerUserGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserGreaterThanOrEqual"></a>

```typescript
public readonly sessionsPerUserGreaterThanOrEqual: string;
```

- *Type:* string

---

##### `sessionsPerUserLessThan`<sup>Required</sup> <a name="sessionsPerUserLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserLessThan"></a>

```typescript
public readonly sessionsPerUserLessThan: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userAssessmentId"></a>

```typescript
public readonly userAssessmentId: string;
```

- *Type:* string

---

##### `userCountGreaterThanOrEqual`<sup>Required</sup> <a name="userCountGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountGreaterThanOrEqual"></a>

```typescript
public readonly userCountGreaterThanOrEqual: string;
```

- *Type:* string

---

##### `userCountLessThan`<sup>Required</sup> <a name="userCountLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountLessThan"></a>

```typescript
public readonly userCountLessThan: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeUserAssessmentProfilesConfig <a name="DataOciDataSafeUserAssessmentProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeUserAssessmentProfilesConfig: dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id DataOciDataSafeUserAssessmentProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userAssessmentId">userAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_assessment_id DataOciDataSafeUserAssessmentProfiles#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#access_level DataOciDataSafeUserAssessmentProfiles#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id_in_subtree DataOciDataSafeUserAssessmentProfiles#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.failedLoginAttemptsGreaterThanOrEqual">failedLoginAttemptsGreaterThanOrEqual</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.failedLoginAttemptsLessThan">failedLoginAttemptsLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_less_than DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#id DataOciDataSafeUserAssessmentProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.inactiveAccountTimeGreaterThanOrEqual">inactiveAccountTimeGreaterThanOrEqual</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#inactive_account_time_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.inactiveAccountTimeLessThan">inactiveAccountTimeLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_less_than DataOciDataSafeUserAssessmentProfiles#inactive_account_time_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.isUserCreated">isUserCreated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#is_user_created DataOciDataSafeUserAssessmentProfiles#is_user_created}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordLockTimeGreaterThanOrEqual">passwordLockTimeGreaterThanOrEqual</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#password_lock_time_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordLockTimeLessThan">passwordLockTimeLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_less_than DataOciDataSafeUserAssessmentProfiles#password_lock_time_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordVerificationFunction">passwordVerificationFunction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_verification_function DataOciDataSafeUserAssessmentProfiles#password_verification_function}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.profileName">profileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#profile_name DataOciDataSafeUserAssessmentProfiles#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.sessionsPerUserGreaterThanOrEqual">sessionsPerUserGreaterThanOrEqual</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#sessions_per_user_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.sessionsPerUserLessThan">sessionsPerUserLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_less_than DataOciDataSafeUserAssessmentProfiles#sessions_per_user_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#target_id DataOciDataSafeUserAssessmentProfiles#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userCountGreaterThanOrEqual">userCountGreaterThanOrEqual</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#user_count_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userCountLessThan">userCountLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_less_than DataOciDataSafeUserAssessmentProfiles#user_count_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id DataOciDataSafeUserAssessmentProfiles#compartment_id}.

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userAssessmentId"></a>

```typescript
public readonly userAssessmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_assessment_id DataOciDataSafeUserAssessmentProfiles#user_assessment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#access_level DataOciDataSafeUserAssessmentProfiles#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id_in_subtree DataOciDataSafeUserAssessmentProfiles#compartment_id_in_subtree}.

---

##### `failedLoginAttemptsGreaterThanOrEqual`<sup>Optional</sup> <a name="failedLoginAttemptsGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.failedLoginAttemptsGreaterThanOrEqual"></a>

```typescript
public readonly failedLoginAttemptsGreaterThanOrEqual: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_greater_than_or_equal}.

---

##### `failedLoginAttemptsLessThan`<sup>Optional</sup> <a name="failedLoginAttemptsLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.failedLoginAttemptsLessThan"></a>

```typescript
public readonly failedLoginAttemptsLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_less_than DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_less_than}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeUserAssessmentProfilesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#filter DataOciDataSafeUserAssessmentProfiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#id DataOciDataSafeUserAssessmentProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inactiveAccountTimeGreaterThanOrEqual`<sup>Optional</sup> <a name="inactiveAccountTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.inactiveAccountTimeGreaterThanOrEqual"></a>

```typescript
public readonly inactiveAccountTimeGreaterThanOrEqual: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#inactive_account_time_greater_than_or_equal}.

---

##### `inactiveAccountTimeLessThan`<sup>Optional</sup> <a name="inactiveAccountTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.inactiveAccountTimeLessThan"></a>

```typescript
public readonly inactiveAccountTimeLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_less_than DataOciDataSafeUserAssessmentProfiles#inactive_account_time_less_than}.

---

##### `isUserCreated`<sup>Optional</sup> <a name="isUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.isUserCreated"></a>

```typescript
public readonly isUserCreated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#is_user_created DataOciDataSafeUserAssessmentProfiles#is_user_created}.

---

##### `passwordLockTimeGreaterThanOrEqual`<sup>Optional</sup> <a name="passwordLockTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordLockTimeGreaterThanOrEqual"></a>

```typescript
public readonly passwordLockTimeGreaterThanOrEqual: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#password_lock_time_greater_than_or_equal}.

---

##### `passwordLockTimeLessThan`<sup>Optional</sup> <a name="passwordLockTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordLockTimeLessThan"></a>

```typescript
public readonly passwordLockTimeLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_less_than DataOciDataSafeUserAssessmentProfiles#password_lock_time_less_than}.

---

##### `passwordVerificationFunction`<sup>Optional</sup> <a name="passwordVerificationFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordVerificationFunction"></a>

```typescript
public readonly passwordVerificationFunction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_verification_function DataOciDataSafeUserAssessmentProfiles#password_verification_function}.

---

##### `profileName`<sup>Optional</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#profile_name DataOciDataSafeUserAssessmentProfiles#profile_name}.

---

##### `sessionsPerUserGreaterThanOrEqual`<sup>Optional</sup> <a name="sessionsPerUserGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.sessionsPerUserGreaterThanOrEqual"></a>

```typescript
public readonly sessionsPerUserGreaterThanOrEqual: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#sessions_per_user_greater_than_or_equal}.

---

##### `sessionsPerUserLessThan`<sup>Optional</sup> <a name="sessionsPerUserLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.sessionsPerUserLessThan"></a>

```typescript
public readonly sessionsPerUserLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_less_than DataOciDataSafeUserAssessmentProfiles#sessions_per_user_less_than}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#target_id DataOciDataSafeUserAssessmentProfiles#target_id}.

---

##### `userCountGreaterThanOrEqual`<sup>Optional</sup> <a name="userCountGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userCountGreaterThanOrEqual"></a>

```typescript
public readonly userCountGreaterThanOrEqual: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#user_count_greater_than_or_equal}.

---

##### `userCountLessThan`<sup>Optional</sup> <a name="userCountLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userCountLessThan"></a>

```typescript
public readonly userCountLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_less_than DataOciDataSafeUserAssessmentProfiles#user_count_less_than}.

---

### DataOciDataSafeUserAssessmentProfilesFilter <a name="DataOciDataSafeUserAssessmentProfilesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeUserAssessmentProfilesFilter: dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#name DataOciDataSafeUserAssessmentProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#values DataOciDataSafeUserAssessmentProfiles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#regex DataOciDataSafeUserAssessmentProfiles#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#name DataOciDataSafeUserAssessmentProfiles#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#values DataOciDataSafeUserAssessmentProfiles#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#regex DataOciDataSafeUserAssessmentProfiles#regex}.

---

### DataOciDataSafeUserAssessmentProfilesProfiles <a name="DataOciDataSafeUserAssessmentProfilesProfiles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfiles.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeUserAssessmentProfilesProfiles: dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfiles = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeUserAssessmentProfilesFilterList <a name="DataOciDataSafeUserAssessmentProfilesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeUserAssessmentProfilesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeUserAssessmentProfilesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a>[]

---


### DataOciDataSafeUserAssessmentProfilesFilterOutputReference <a name="DataOciDataSafeUserAssessmentProfilesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeUserAssessmentProfilesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a>

---


### DataOciDataSafeUserAssessmentProfilesProfilesList <a name="DataOciDataSafeUserAssessmentProfilesProfilesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.get"></a>

```typescript
public get(index: number): DataOciDataSafeUserAssessmentProfilesProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeUserAssessmentProfilesProfilesOutputReference <a name="DataOciDataSafeUserAssessmentProfilesProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.compositeLimit">compositeLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.connectTime">connectTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.cpuPerCall">cpuPerCall</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.cpuPerSession">cpuPerSession</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.failedLoginAttempts">failedLoginAttempts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.idleTime">idleTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.inactiveAccountTime">inactiveAccountTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.isUserCreated">isUserCreated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.logicalReadsPerCall">logicalReadsPerCall</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.logicalReadsPerSession">logicalReadsPerSession</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordGraceTime">passwordGraceTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordLifeTime">passwordLifeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordLockTime">passwordLockTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordReuseMax">passwordReuseMax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordReuseTime">passwordReuseTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordRolloverTime">passwordRolloverTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordVerificationFunction">passwordVerificationFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordVerificationFunctionDetails">passwordVerificationFunctionDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.privateSga">privateSga</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.sessionsPerUser">sessionsPerUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.userAssessmentId">userAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.userCount">userCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfiles">DataOciDataSafeUserAssessmentProfilesProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compositeLimit`<sup>Required</sup> <a name="compositeLimit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.compositeLimit"></a>

```typescript
public readonly compositeLimit: string;
```

- *Type:* string

---

##### `connectTime`<sup>Required</sup> <a name="connectTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.connectTime"></a>

```typescript
public readonly connectTime: string;
```

- *Type:* string

---

##### `cpuPerCall`<sup>Required</sup> <a name="cpuPerCall" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.cpuPerCall"></a>

```typescript
public readonly cpuPerCall: string;
```

- *Type:* string

---

##### `cpuPerSession`<sup>Required</sup> <a name="cpuPerSession" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.cpuPerSession"></a>

```typescript
public readonly cpuPerSession: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `failedLoginAttempts`<sup>Required</sup> <a name="failedLoginAttempts" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.failedLoginAttempts"></a>

```typescript
public readonly failedLoginAttempts: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `idleTime`<sup>Required</sup> <a name="idleTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.idleTime"></a>

```typescript
public readonly idleTime: string;
```

- *Type:* string

---

##### `inactiveAccountTime`<sup>Required</sup> <a name="inactiveAccountTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.inactiveAccountTime"></a>

```typescript
public readonly inactiveAccountTime: string;
```

- *Type:* string

---

##### `isUserCreated`<sup>Required</sup> <a name="isUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.isUserCreated"></a>

```typescript
public readonly isUserCreated: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `logicalReadsPerCall`<sup>Required</sup> <a name="logicalReadsPerCall" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.logicalReadsPerCall"></a>

```typescript
public readonly logicalReadsPerCall: string;
```

- *Type:* string

---

##### `logicalReadsPerSession`<sup>Required</sup> <a name="logicalReadsPerSession" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.logicalReadsPerSession"></a>

```typescript
public readonly logicalReadsPerSession: string;
```

- *Type:* string

---

##### `passwordGraceTime`<sup>Required</sup> <a name="passwordGraceTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordGraceTime"></a>

```typescript
public readonly passwordGraceTime: string;
```

- *Type:* string

---

##### `passwordLifeTime`<sup>Required</sup> <a name="passwordLifeTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordLifeTime"></a>

```typescript
public readonly passwordLifeTime: string;
```

- *Type:* string

---

##### `passwordLockTime`<sup>Required</sup> <a name="passwordLockTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordLockTime"></a>

```typescript
public readonly passwordLockTime: string;
```

- *Type:* string

---

##### `passwordReuseMax`<sup>Required</sup> <a name="passwordReuseMax" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordReuseMax"></a>

```typescript
public readonly passwordReuseMax: string;
```

- *Type:* string

---

##### `passwordReuseTime`<sup>Required</sup> <a name="passwordReuseTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordReuseTime"></a>

```typescript
public readonly passwordReuseTime: string;
```

- *Type:* string

---

##### `passwordRolloverTime`<sup>Required</sup> <a name="passwordRolloverTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordRolloverTime"></a>

```typescript
public readonly passwordRolloverTime: string;
```

- *Type:* string

---

##### `passwordVerificationFunction`<sup>Required</sup> <a name="passwordVerificationFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordVerificationFunction"></a>

```typescript
public readonly passwordVerificationFunction: string;
```

- *Type:* string

---

##### `passwordVerificationFunctionDetails`<sup>Required</sup> <a name="passwordVerificationFunctionDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordVerificationFunctionDetails"></a>

```typescript
public readonly passwordVerificationFunctionDetails: string;
```

- *Type:* string

---

##### `privateSga`<sup>Required</sup> <a name="privateSga" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.privateSga"></a>

```typescript
public readonly privateSga: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `sessionsPerUser`<sup>Required</sup> <a name="sessionsPerUser" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.sessionsPerUser"></a>

```typescript
public readonly sessionsPerUser: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.userAssessmentId"></a>

```typescript
public readonly userAssessmentId: string;
```

- *Type:* string

---

##### `userCount`<sup>Required</sup> <a name="userCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.userCount"></a>

```typescript
public readonly userCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeUserAssessmentProfilesProfiles;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfiles">DataOciDataSafeUserAssessmentProfilesProfiles</a>

---



