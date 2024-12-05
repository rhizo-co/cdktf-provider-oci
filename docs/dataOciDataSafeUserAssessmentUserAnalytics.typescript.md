# `dataOciDataSafeUserAssessmentUserAnalytics` Submodule <a name="`dataOciDataSafeUserAssessmentUserAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeUserAssessmentUserAnalytics <a name="DataOciDataSafeUserAssessmentUserAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics oci_data_safe_user_assessment_user_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUserAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics(scope: Construct, id: string, config: DataOciDataSafeUserAssessmentUserAnalyticsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig">DataOciDataSafeUserAssessmentUserAnalyticsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig">DataOciDataSafeUserAssessmentUserAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetAccountStatus">resetAccountStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeLastLoginGreaterThanOrEqualTo">resetTimeLastLoginGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeLastLoginLessThan">resetTimeLastLoginLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimePasswordLastChangedGreaterThanOrEqualTo">resetTimePasswordLastChangedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimePasswordLastChangedLessThan">resetTimePasswordLastChangedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeUserCreatedGreaterThanOrEqualTo">resetTimeUserCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeUserCreatedLessThan">resetTimeUserCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetUserCategory">resetUserCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetUserKey">resetUserKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeUserAssessmentUserAnalyticsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetAccountStatus` <a name="resetAccountStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetAccountStatus"></a>

```typescript
public resetAccountStatus(): void
```

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetAuthenticationType"></a>

```typescript
public resetAuthenticationType(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

##### `resetTimeLastLoginGreaterThanOrEqualTo` <a name="resetTimeLastLoginGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeLastLoginGreaterThanOrEqualTo"></a>

```typescript
public resetTimeLastLoginGreaterThanOrEqualTo(): void
```

##### `resetTimeLastLoginLessThan` <a name="resetTimeLastLoginLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeLastLoginLessThan"></a>

```typescript
public resetTimeLastLoginLessThan(): void
```

##### `resetTimePasswordLastChangedGreaterThanOrEqualTo` <a name="resetTimePasswordLastChangedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimePasswordLastChangedGreaterThanOrEqualTo"></a>

```typescript
public resetTimePasswordLastChangedGreaterThanOrEqualTo(): void
```

##### `resetTimePasswordLastChangedLessThan` <a name="resetTimePasswordLastChangedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimePasswordLastChangedLessThan"></a>

```typescript
public resetTimePasswordLastChangedLessThan(): void
```

##### `resetTimeUserCreatedGreaterThanOrEqualTo` <a name="resetTimeUserCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeUserCreatedGreaterThanOrEqualTo"></a>

```typescript
public resetTimeUserCreatedGreaterThanOrEqualTo(): void
```

##### `resetTimeUserCreatedLessThan` <a name="resetTimeUserCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeUserCreatedLessThan"></a>

```typescript
public resetTimeUserCreatedLessThan(): void
```

##### `resetUserCategory` <a name="resetUserCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetUserCategory"></a>

```typescript
public resetUserCategory(): void
```

##### `resetUserKey` <a name="resetUserKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetUserKey"></a>

```typescript
public resetUserKey(): void
```

##### `resetUserName` <a name="resetUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetUserName"></a>

```typescript
public resetUserName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUserAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isConstruct"></a>

```typescript
import { dataOciDataSafeUserAssessmentUserAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformElement"></a>

```typescript
import { dataOciDataSafeUserAssessmentUserAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeUserAssessmentUserAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeUserAssessmentUserAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUserAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeUserAssessmentUserAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeUserAssessmentUserAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeUserAssessmentUserAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList">DataOciDataSafeUserAssessmentUserAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userAggregations">userAggregations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accountStatusInput">accountStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginGreaterThanOrEqualToInput">timeLastLoginGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginLessThanInput">timeLastLoginLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedGreaterThanOrEqualToInput">timePasswordLastChangedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedLessThanInput">timePasswordLastChangedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedGreaterThanOrEqualToInput">timeUserCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedLessThanInput">timeUserCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userAssessmentIdInput">userAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userCategoryInput">userCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userKeyInput">userKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accountStatus">accountStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginGreaterThanOrEqualTo">timeLastLoginGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginLessThan">timeLastLoginLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedGreaterThanOrEqualTo">timePasswordLastChangedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedLessThan">timePasswordLastChangedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedGreaterThanOrEqualTo">timeUserCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedLessThan">timeUserCreatedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userAssessmentId">userAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userCategory">userCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userKey">userKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeUserAssessmentUserAnalyticsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList">DataOciDataSafeUserAssessmentUserAnalyticsFilterList</a>

---

##### `userAggregations`<sup>Required</sup> <a name="userAggregations" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userAggregations"></a>

```typescript
public readonly userAggregations: DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `accountStatusInput`<sup>Optional</sup> <a name="accountStatusInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accountStatusInput"></a>

```typescript
public readonly accountStatusInput: string;
```

- *Type:* string

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeUserAssessmentUserAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `timeLastLoginGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeLastLoginGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeLastLoginGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeLastLoginLessThanInput`<sup>Optional</sup> <a name="timeLastLoginLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginLessThanInput"></a>

```typescript
public readonly timeLastLoginLessThanInput: string;
```

- *Type:* string

---

##### `timePasswordLastChangedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timePasswordLastChangedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedGreaterThanOrEqualToInput"></a>

```typescript
public readonly timePasswordLastChangedGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timePasswordLastChangedLessThanInput`<sup>Optional</sup> <a name="timePasswordLastChangedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedLessThanInput"></a>

```typescript
public readonly timePasswordLastChangedLessThanInput: string;
```

- *Type:* string

---

##### `timeUserCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeUserCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeUserCreatedGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeUserCreatedLessThanInput`<sup>Optional</sup> <a name="timeUserCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedLessThanInput"></a>

```typescript
public readonly timeUserCreatedLessThanInput: string;
```

- *Type:* string

---

##### `userAssessmentIdInput`<sup>Optional</sup> <a name="userAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userAssessmentIdInput"></a>

```typescript
public readonly userAssessmentIdInput: string;
```

- *Type:* string

---

##### `userCategoryInput`<sup>Optional</sup> <a name="userCategoryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userCategoryInput"></a>

```typescript
public readonly userCategoryInput: string;
```

- *Type:* string

---

##### `userKeyInput`<sup>Optional</sup> <a name="userKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userKeyInput"></a>

```typescript
public readonly userKeyInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `accountStatus`<sup>Required</sup> <a name="accountStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accountStatus"></a>

```typescript
public readonly accountStatus: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeLastLoginGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeLastLoginGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginGreaterThanOrEqualTo"></a>

```typescript
public readonly timeLastLoginGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeLastLoginLessThan`<sup>Required</sup> <a name="timeLastLoginLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginLessThan"></a>

```typescript
public readonly timeLastLoginLessThan: string;
```

- *Type:* string

---

##### `timePasswordLastChangedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timePasswordLastChangedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedGreaterThanOrEqualTo"></a>

```typescript
public readonly timePasswordLastChangedGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timePasswordLastChangedLessThan`<sup>Required</sup> <a name="timePasswordLastChangedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedLessThan"></a>

```typescript
public readonly timePasswordLastChangedLessThan: string;
```

- *Type:* string

---

##### `timeUserCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeUserCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeUserCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeUserCreatedLessThan`<sup>Required</sup> <a name="timeUserCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedLessThan"></a>

```typescript
public readonly timeUserCreatedLessThan: string;
```

- *Type:* string

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userAssessmentId"></a>

```typescript
public readonly userAssessmentId: string;
```

- *Type:* string

---

##### `userCategory`<sup>Required</sup> <a name="userCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userCategory"></a>

```typescript
public readonly userCategory: string;
```

- *Type:* string

---

##### `userKey`<sup>Required</sup> <a name="userKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userKey"></a>

```typescript
public readonly userKey: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeUserAssessmentUserAnalyticsConfig <a name="DataOciDataSafeUserAssessmentUserAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUserAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeUserAssessmentUserAnalyticsConfig: dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userAssessmentId">userAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_assessment_id DataOciDataSafeUserAssessmentUserAnalytics#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#access_level DataOciDataSafeUserAssessmentUserAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.accountStatus">accountStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#account_status DataOciDataSafeUserAssessmentUserAnalytics#account_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.authenticationType">authenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#authentication_type DataOciDataSafeUserAssessmentUserAnalytics#authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#compartment_id_in_subtree DataOciDataSafeUserAssessmentUserAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#id DataOciDataSafeUserAssessmentUserAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#target_id DataOciDataSafeUserAssessmentUserAnalytics#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeLastLoginGreaterThanOrEqualTo">timeLastLoginGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_last_login_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeLastLoginLessThan">timeLastLoginLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_last_login_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_last_login_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timePasswordLastChangedGreaterThanOrEqualTo">timePasswordLastChangedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_password_last_changed_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timePasswordLastChangedLessThan">timePasswordLastChangedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_password_last_changed_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeUserCreatedGreaterThanOrEqualTo">timeUserCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_user_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeUserCreatedLessThan">timeUserCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_user_created_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_user_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userCategory">userCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_category DataOciDataSafeUserAssessmentUserAnalytics#user_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userKey">userKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_key DataOciDataSafeUserAssessmentUserAnalytics#user_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_name DataOciDataSafeUserAssessmentUserAnalytics#user_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userAssessmentId"></a>

```typescript
public readonly userAssessmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_assessment_id DataOciDataSafeUserAssessmentUserAnalytics#user_assessment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#access_level DataOciDataSafeUserAssessmentUserAnalytics#access_level}.

---

##### `accountStatus`<sup>Optional</sup> <a name="accountStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.accountStatus"></a>

```typescript
public readonly accountStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#account_status DataOciDataSafeUserAssessmentUserAnalytics#account_status}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#authentication_type DataOciDataSafeUserAssessmentUserAnalytics#authentication_type}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#compartment_id_in_subtree DataOciDataSafeUserAssessmentUserAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeUserAssessmentUserAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#filter DataOciDataSafeUserAssessmentUserAnalytics#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#id DataOciDataSafeUserAssessmentUserAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#target_id DataOciDataSafeUserAssessmentUserAnalytics#target_id}.

---

##### `timeLastLoginGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeLastLoginGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeLastLoginGreaterThanOrEqualTo"></a>

```typescript
public readonly timeLastLoginGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_last_login_greater_than_or_equal_to}.

---

##### `timeLastLoginLessThan`<sup>Optional</sup> <a name="timeLastLoginLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeLastLoginLessThan"></a>

```typescript
public readonly timeLastLoginLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_last_login_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_last_login_less_than}.

---

##### `timePasswordLastChangedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timePasswordLastChangedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timePasswordLastChangedGreaterThanOrEqualTo"></a>

```typescript
public readonly timePasswordLastChangedGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_password_last_changed_greater_than_or_equal_to}.

---

##### `timePasswordLastChangedLessThan`<sup>Optional</sup> <a name="timePasswordLastChangedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timePasswordLastChangedLessThan"></a>

```typescript
public readonly timePasswordLastChangedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_password_last_changed_less_than}.

---

##### `timeUserCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeUserCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeUserCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeUserCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_user_created_greater_than_or_equal_to}.

---

##### `timeUserCreatedLessThan`<sup>Optional</sup> <a name="timeUserCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeUserCreatedLessThan"></a>

```typescript
public readonly timeUserCreatedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_user_created_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_user_created_less_than}.

---

##### `userCategory`<sup>Optional</sup> <a name="userCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userCategory"></a>

```typescript
public readonly userCategory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_category DataOciDataSafeUserAssessmentUserAnalytics#user_category}.

---

##### `userKey`<sup>Optional</sup> <a name="userKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userKey"></a>

```typescript
public readonly userKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_key DataOciDataSafeUserAssessmentUserAnalytics#user_key}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_name DataOciDataSafeUserAssessmentUserAnalytics#user_name}.

---

### DataOciDataSafeUserAssessmentUserAnalyticsFilter <a name="DataOciDataSafeUserAssessmentUserAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUserAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeUserAssessmentUserAnalyticsFilter: dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#name DataOciDataSafeUserAssessmentUserAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#values DataOciDataSafeUserAssessmentUserAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#regex DataOciDataSafeUserAssessmentUserAnalytics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#name DataOciDataSafeUserAssessmentUserAnalytics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#values DataOciDataSafeUserAssessmentUserAnalytics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#regex DataOciDataSafeUserAssessmentUserAnalytics#regex}.

---

### DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations <a name="DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUserAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeUserAssessmentUserAnalyticsUserAggregations: dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations = { ... }
```


### DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems <a name="DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUserAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems: dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeUserAssessmentUserAnalyticsFilterList <a name="DataOciDataSafeUserAssessmentUserAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUserAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeUserAssessmentUserAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>[]

---


### DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference <a name="DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUserAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeUserAssessmentUserAnalyticsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter">DataOciDataSafeUserAssessmentUserAnalyticsFilter</a>

---


### DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList <a name="DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUserAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference <a name="DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUserAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems</a>

---


### DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList <a name="DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUserAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference <a name="DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUserAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations</a>

---



