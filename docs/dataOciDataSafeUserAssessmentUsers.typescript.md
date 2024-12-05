# `dataOciDataSafeUserAssessmentUsers` Submodule <a name="`dataOciDataSafeUserAssessmentUsers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeUserAssessmentUsers <a name="DataOciDataSafeUserAssessmentUsers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users oci_data_safe_user_assessment_users}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers(scope: Construct, id: string, config: DataOciDataSafeUserAssessmentUsersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig">DataOciDataSafeUserAssessmentUsersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig">DataOciDataSafeUserAssessmentUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAccountStatus">resetAccountStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAreAllSchemasAccessible">resetAreAllSchemasAccessible</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetSchemaList">resetSchemaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeLastLoginGreaterThanOrEqualTo">resetTimeLastLoginGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeLastLoginLessThan">resetTimeLastLoginLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimePasswordLastChangedGreaterThanOrEqualTo">resetTimePasswordLastChangedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimePasswordLastChangedLessThan">resetTimePasswordLastChangedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeUserCreatedGreaterThanOrEqualTo">resetTimeUserCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeUserCreatedLessThan">resetTimeUserCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserCategory">resetUserCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserKey">resetUserKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserName">resetUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserProfile">resetUserProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserRole">resetUserRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserType">resetUserType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeUserAssessmentUsersFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetAccountStatus` <a name="resetAccountStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAccountStatus"></a>

```typescript
public resetAccountStatus(): void
```

##### `resetAreAllSchemasAccessible` <a name="resetAreAllSchemasAccessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAreAllSchemasAccessible"></a>

```typescript
public resetAreAllSchemasAccessible(): void
```

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetAuthenticationType"></a>

```typescript
public resetAuthenticationType(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSchemaList` <a name="resetSchemaList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetSchemaList"></a>

```typescript
public resetSchemaList(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

##### `resetTimeLastLoginGreaterThanOrEqualTo` <a name="resetTimeLastLoginGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeLastLoginGreaterThanOrEqualTo"></a>

```typescript
public resetTimeLastLoginGreaterThanOrEqualTo(): void
```

##### `resetTimeLastLoginLessThan` <a name="resetTimeLastLoginLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeLastLoginLessThan"></a>

```typescript
public resetTimeLastLoginLessThan(): void
```

##### `resetTimePasswordLastChangedGreaterThanOrEqualTo` <a name="resetTimePasswordLastChangedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimePasswordLastChangedGreaterThanOrEqualTo"></a>

```typescript
public resetTimePasswordLastChangedGreaterThanOrEqualTo(): void
```

##### `resetTimePasswordLastChangedLessThan` <a name="resetTimePasswordLastChangedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimePasswordLastChangedLessThan"></a>

```typescript
public resetTimePasswordLastChangedLessThan(): void
```

##### `resetTimeUserCreatedGreaterThanOrEqualTo` <a name="resetTimeUserCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeUserCreatedGreaterThanOrEqualTo"></a>

```typescript
public resetTimeUserCreatedGreaterThanOrEqualTo(): void
```

##### `resetTimeUserCreatedLessThan` <a name="resetTimeUserCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetTimeUserCreatedLessThan"></a>

```typescript
public resetTimeUserCreatedLessThan(): void
```

##### `resetUserCategory` <a name="resetUserCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserCategory"></a>

```typescript
public resetUserCategory(): void
```

##### `resetUserKey` <a name="resetUserKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserKey"></a>

```typescript
public resetUserKey(): void
```

##### `resetUserName` <a name="resetUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserName"></a>

```typescript
public resetUserName(): void
```

##### `resetUserProfile` <a name="resetUserProfile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserProfile"></a>

```typescript
public resetUserProfile(): void
```

##### `resetUserRole` <a name="resetUserRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserRole"></a>

```typescript
public resetUserRole(): void
```

##### `resetUserType` <a name="resetUserType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.resetUserType"></a>

```typescript
public resetUserType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUsers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isConstruct"></a>

```typescript
import { dataOciDataSafeUserAssessmentUsers } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformElement"></a>

```typescript
import { dataOciDataSafeUserAssessmentUsers } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeUserAssessmentUsers } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeUserAssessmentUsers } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeUserAssessmentUsers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeUserAssessmentUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeUserAssessmentUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList">DataOciDataSafeUserAssessmentUsersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.users">users</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList">DataOciDataSafeUserAssessmentUsersUsersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accountStatusInput">accountStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.areAllSchemasAccessibleInput">areAllSchemasAccessibleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.schemaListInput">schemaListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginGreaterThanOrEqualToInput">timeLastLoginGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginLessThanInput">timeLastLoginLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedGreaterThanOrEqualToInput">timePasswordLastChangedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedLessThanInput">timePasswordLastChangedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedGreaterThanOrEqualToInput">timeUserCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedLessThanInput">timeUserCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userAssessmentIdInput">userAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userCategoryInput">userCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userKeyInput">userKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userProfileInput">userProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userRoleInput">userRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userTypeInput">userTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accountStatus">accountStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.areAllSchemasAccessible">areAllSchemasAccessible</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.schemaList">schemaList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginGreaterThanOrEqualTo">timeLastLoginGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginLessThan">timeLastLoginLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedGreaterThanOrEqualTo">timePasswordLastChangedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedLessThan">timePasswordLastChangedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedGreaterThanOrEqualTo">timeUserCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedLessThan">timeUserCreatedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userAssessmentId">userAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userCategory">userCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userKey">userKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userProfile">userProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userRole">userRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userType">userType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeUserAssessmentUsersFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList">DataOciDataSafeUserAssessmentUsersFilterList</a>

---

##### `users`<sup>Required</sup> <a name="users" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.users"></a>

```typescript
public readonly users: DataOciDataSafeUserAssessmentUsersUsersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList">DataOciDataSafeUserAssessmentUsersUsersList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `accountStatusInput`<sup>Optional</sup> <a name="accountStatusInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accountStatusInput"></a>

```typescript
public readonly accountStatusInput: string;
```

- *Type:* string

---

##### `areAllSchemasAccessibleInput`<sup>Optional</sup> <a name="areAllSchemasAccessibleInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.areAllSchemasAccessibleInput"></a>

```typescript
public readonly areAllSchemasAccessibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeUserAssessmentUsersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `schemaListInput`<sup>Optional</sup> <a name="schemaListInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.schemaListInput"></a>

```typescript
public readonly schemaListInput: string[];
```

- *Type:* string[]

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `timeLastLoginGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeLastLoginGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeLastLoginGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeLastLoginLessThanInput`<sup>Optional</sup> <a name="timeLastLoginLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginLessThanInput"></a>

```typescript
public readonly timeLastLoginLessThanInput: string;
```

- *Type:* string

---

##### `timePasswordLastChangedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timePasswordLastChangedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedGreaterThanOrEqualToInput"></a>

```typescript
public readonly timePasswordLastChangedGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timePasswordLastChangedLessThanInput`<sup>Optional</sup> <a name="timePasswordLastChangedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedLessThanInput"></a>

```typescript
public readonly timePasswordLastChangedLessThanInput: string;
```

- *Type:* string

---

##### `timeUserCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeUserCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeUserCreatedGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeUserCreatedLessThanInput`<sup>Optional</sup> <a name="timeUserCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedLessThanInput"></a>

```typescript
public readonly timeUserCreatedLessThanInput: string;
```

- *Type:* string

---

##### `userAssessmentIdInput`<sup>Optional</sup> <a name="userAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userAssessmentIdInput"></a>

```typescript
public readonly userAssessmentIdInput: string;
```

- *Type:* string

---

##### `userCategoryInput`<sup>Optional</sup> <a name="userCategoryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userCategoryInput"></a>

```typescript
public readonly userCategoryInput: string;
```

- *Type:* string

---

##### `userKeyInput`<sup>Optional</sup> <a name="userKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userKeyInput"></a>

```typescript
public readonly userKeyInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `userProfileInput`<sup>Optional</sup> <a name="userProfileInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userProfileInput"></a>

```typescript
public readonly userProfileInput: string;
```

- *Type:* string

---

##### `userRoleInput`<sup>Optional</sup> <a name="userRoleInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userRoleInput"></a>

```typescript
public readonly userRoleInput: string;
```

- *Type:* string

---

##### `userTypeInput`<sup>Optional</sup> <a name="userTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userTypeInput"></a>

```typescript
public readonly userTypeInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `accountStatus`<sup>Required</sup> <a name="accountStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.accountStatus"></a>

```typescript
public readonly accountStatus: string;
```

- *Type:* string

---

##### `areAllSchemasAccessible`<sup>Required</sup> <a name="areAllSchemasAccessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.areAllSchemasAccessible"></a>

```typescript
public readonly areAllSchemasAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `schemaList`<sup>Required</sup> <a name="schemaList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.schemaList"></a>

```typescript
public readonly schemaList: string[];
```

- *Type:* string[]

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeLastLoginGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeLastLoginGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginGreaterThanOrEqualTo"></a>

```typescript
public readonly timeLastLoginGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeLastLoginLessThan`<sup>Required</sup> <a name="timeLastLoginLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeLastLoginLessThan"></a>

```typescript
public readonly timeLastLoginLessThan: string;
```

- *Type:* string

---

##### `timePasswordLastChangedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timePasswordLastChangedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedGreaterThanOrEqualTo"></a>

```typescript
public readonly timePasswordLastChangedGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timePasswordLastChangedLessThan`<sup>Required</sup> <a name="timePasswordLastChangedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timePasswordLastChangedLessThan"></a>

```typescript
public readonly timePasswordLastChangedLessThan: string;
```

- *Type:* string

---

##### `timeUserCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeUserCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeUserCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeUserCreatedLessThan`<sup>Required</sup> <a name="timeUserCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.timeUserCreatedLessThan"></a>

```typescript
public readonly timeUserCreatedLessThan: string;
```

- *Type:* string

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userAssessmentId"></a>

```typescript
public readonly userAssessmentId: string;
```

- *Type:* string

---

##### `userCategory`<sup>Required</sup> <a name="userCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userCategory"></a>

```typescript
public readonly userCategory: string;
```

- *Type:* string

---

##### `userKey`<sup>Required</sup> <a name="userKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userKey"></a>

```typescript
public readonly userKey: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `userProfile`<sup>Required</sup> <a name="userProfile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userProfile"></a>

```typescript
public readonly userProfile: string;
```

- *Type:* string

---

##### `userRole`<sup>Required</sup> <a name="userRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userRole"></a>

```typescript
public readonly userRole: string;
```

- *Type:* string

---

##### `userType`<sup>Required</sup> <a name="userType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeUserAssessmentUsersConfig <a name="DataOciDataSafeUserAssessmentUsersConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeUserAssessmentUsersConfig: dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userAssessmentId">userAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_assessment_id DataOciDataSafeUserAssessmentUsers#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#access_level DataOciDataSafeUserAssessmentUsers#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.accountStatus">accountStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#account_status DataOciDataSafeUserAssessmentUsers#account_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.areAllSchemasAccessible">areAllSchemasAccessible</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#are_all_schemas_accessible DataOciDataSafeUserAssessmentUsers#are_all_schemas_accessible}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.authenticationType">authenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#authentication_type DataOciDataSafeUserAssessmentUsers#authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#compartment_id_in_subtree DataOciDataSafeUserAssessmentUsers#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#id DataOciDataSafeUserAssessmentUsers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.schemaList">schemaList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#schema_list DataOciDataSafeUserAssessmentUsers#schema_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#target_id DataOciDataSafeUserAssessmentUsers#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeLastLoginGreaterThanOrEqualTo">timeLastLoginGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_last_login_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeLastLoginLessThan">timeLastLoginLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_less_than DataOciDataSafeUserAssessmentUsers#time_last_login_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timePasswordLastChangedGreaterThanOrEqualTo">timePasswordLastChangedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_password_last_changed_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timePasswordLastChangedLessThan">timePasswordLastChangedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUsers#time_password_last_changed_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeUserCreatedGreaterThanOrEqualTo">timeUserCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_user_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeUserCreatedLessThan">timeUserCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_less_than DataOciDataSafeUserAssessmentUsers#time_user_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userCategory">userCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_category DataOciDataSafeUserAssessmentUsers#user_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userKey">userKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_key DataOciDataSafeUserAssessmentUsers#user_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_name DataOciDataSafeUserAssessmentUsers#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userProfile">userProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_profile DataOciDataSafeUserAssessmentUsers#user_profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userRole">userRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_role DataOciDataSafeUserAssessmentUsers#user_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userType">userType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_type DataOciDataSafeUserAssessmentUsers#user_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userAssessmentId"></a>

```typescript
public readonly userAssessmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_assessment_id DataOciDataSafeUserAssessmentUsers#user_assessment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#access_level DataOciDataSafeUserAssessmentUsers#access_level}.

---

##### `accountStatus`<sup>Optional</sup> <a name="accountStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.accountStatus"></a>

```typescript
public readonly accountStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#account_status DataOciDataSafeUserAssessmentUsers#account_status}.

---

##### `areAllSchemasAccessible`<sup>Optional</sup> <a name="areAllSchemasAccessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.areAllSchemasAccessible"></a>

```typescript
public readonly areAllSchemasAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#are_all_schemas_accessible DataOciDataSafeUserAssessmentUsers#are_all_schemas_accessible}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#authentication_type DataOciDataSafeUserAssessmentUsers#authentication_type}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#compartment_id_in_subtree DataOciDataSafeUserAssessmentUsers#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeUserAssessmentUsersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#filter DataOciDataSafeUserAssessmentUsers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#id DataOciDataSafeUserAssessmentUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schemaList`<sup>Optional</sup> <a name="schemaList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.schemaList"></a>

```typescript
public readonly schemaList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#schema_list DataOciDataSafeUserAssessmentUsers#schema_list}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#target_id DataOciDataSafeUserAssessmentUsers#target_id}.

---

##### `timeLastLoginGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeLastLoginGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeLastLoginGreaterThanOrEqualTo"></a>

```typescript
public readonly timeLastLoginGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_last_login_greater_than_or_equal_to}.

---

##### `timeLastLoginLessThan`<sup>Optional</sup> <a name="timeLastLoginLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeLastLoginLessThan"></a>

```typescript
public readonly timeLastLoginLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_less_than DataOciDataSafeUserAssessmentUsers#time_last_login_less_than}.

---

##### `timePasswordLastChangedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timePasswordLastChangedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timePasswordLastChangedGreaterThanOrEqualTo"></a>

```typescript
public readonly timePasswordLastChangedGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_password_last_changed_greater_than_or_equal_to}.

---

##### `timePasswordLastChangedLessThan`<sup>Optional</sup> <a name="timePasswordLastChangedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timePasswordLastChangedLessThan"></a>

```typescript
public readonly timePasswordLastChangedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUsers#time_password_last_changed_less_than}.

---

##### `timeUserCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeUserCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeUserCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeUserCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_user_created_greater_than_or_equal_to}.

---

##### `timeUserCreatedLessThan`<sup>Optional</sup> <a name="timeUserCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.timeUserCreatedLessThan"></a>

```typescript
public readonly timeUserCreatedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_less_than DataOciDataSafeUserAssessmentUsers#time_user_created_less_than}.

---

##### `userCategory`<sup>Optional</sup> <a name="userCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userCategory"></a>

```typescript
public readonly userCategory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_category DataOciDataSafeUserAssessmentUsers#user_category}.

---

##### `userKey`<sup>Optional</sup> <a name="userKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userKey"></a>

```typescript
public readonly userKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_key DataOciDataSafeUserAssessmentUsers#user_key}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_name DataOciDataSafeUserAssessmentUsers#user_name}.

---

##### `userProfile`<sup>Optional</sup> <a name="userProfile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userProfile"></a>

```typescript
public readonly userProfile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_profile DataOciDataSafeUserAssessmentUsers#user_profile}.

---

##### `userRole`<sup>Optional</sup> <a name="userRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userRole"></a>

```typescript
public readonly userRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_role DataOciDataSafeUserAssessmentUsers#user_role}.

---

##### `userType`<sup>Optional</sup> <a name="userType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersConfig.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#user_type DataOciDataSafeUserAssessmentUsers#user_type}.

---

### DataOciDataSafeUserAssessmentUsersFilter <a name="DataOciDataSafeUserAssessmentUsersFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeUserAssessmentUsersFilter: dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#name DataOciDataSafeUserAssessmentUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#values DataOciDataSafeUserAssessmentUsers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#regex DataOciDataSafeUserAssessmentUsers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#name DataOciDataSafeUserAssessmentUsers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#values DataOciDataSafeUserAssessmentUsers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_users#regex DataOciDataSafeUserAssessmentUsers#regex}.

---

### DataOciDataSafeUserAssessmentUsersUsers <a name="DataOciDataSafeUserAssessmentUsersUsers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsers.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeUserAssessmentUsersUsers: dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeUserAssessmentUsersFilterList <a name="DataOciDataSafeUserAssessmentUsersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeUserAssessmentUsersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeUserAssessmentUsersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>[]

---


### DataOciDataSafeUserAssessmentUsersFilterOutputReference <a name="DataOciDataSafeUserAssessmentUsersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeUserAssessmentUsersFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersFilter">DataOciDataSafeUserAssessmentUsersFilter</a>

---


### DataOciDataSafeUserAssessmentUsersUsersList <a name="DataOciDataSafeUserAssessmentUsersUsersList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.get"></a>

```typescript
public get(index: number): DataOciDataSafeUserAssessmentUsersUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeUserAssessmentUsersUsersOutputReference <a name="DataOciDataSafeUserAssessmentUsersUsersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.accountStatus">accountStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.adminRoles">adminRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.areAllSchemasAccessible">areAllSchemasAccessible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.schemaList">schemaList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timeLastLogin">timeLastLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timePasswordChanged">timePasswordChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timeUserCreated">timeUserCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userCategory">userCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userProfile">userProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userTypes">userTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsers">DataOciDataSafeUserAssessmentUsersUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountStatus`<sup>Required</sup> <a name="accountStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.accountStatus"></a>

```typescript
public readonly accountStatus: string;
```

- *Type:* string

---

##### `adminRoles`<sup>Required</sup> <a name="adminRoles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.adminRoles"></a>

```typescript
public readonly adminRoles: string[];
```

- *Type:* string[]

---

##### `areAllSchemasAccessible`<sup>Required</sup> <a name="areAllSchemasAccessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.areAllSchemasAccessible"></a>

```typescript
public readonly areAllSchemasAccessible: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `schemaList`<sup>Required</sup> <a name="schemaList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.schemaList"></a>

```typescript
public readonly schemaList: string[];
```

- *Type:* string[]

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeLastLogin`<sup>Required</sup> <a name="timeLastLogin" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timeLastLogin"></a>

```typescript
public readonly timeLastLogin: string;
```

- *Type:* string

---

##### `timePasswordChanged`<sup>Required</sup> <a name="timePasswordChanged" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timePasswordChanged"></a>

```typescript
public readonly timePasswordChanged: string;
```

- *Type:* string

---

##### `timeUserCreated`<sup>Required</sup> <a name="timeUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.timeUserCreated"></a>

```typescript
public readonly timeUserCreated: string;
```

- *Type:* string

---

##### `userCategory`<sup>Required</sup> <a name="userCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userCategory"></a>

```typescript
public readonly userCategory: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `userProfile`<sup>Required</sup> <a name="userProfile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userProfile"></a>

```typescript
public readonly userProfile: string;
```

- *Type:* string

---

##### `userTypes`<sup>Required</sup> <a name="userTypes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.userTypes"></a>

```typescript
public readonly userTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeUserAssessmentUsersUsers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUsers.DataOciDataSafeUserAssessmentUsersUsers">DataOciDataSafeUserAssessmentUsersUsers</a>

---



