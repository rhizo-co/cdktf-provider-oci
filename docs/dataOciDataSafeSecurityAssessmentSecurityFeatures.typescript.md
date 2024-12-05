# `dataOciDataSafeSecurityAssessmentSecurityFeatures` Submodule <a name="`dataOciDataSafeSecurityAssessmentSecurityFeatures` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessmentSecurityFeatures <a name="DataOciDataSafeSecurityAssessmentSecurityFeatures" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features oci_data_safe_security_assessment_security_features}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatures } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures(scope: Construct, id: string, config: DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig">DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig">DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithColumnEncryption">resetTargetsWithColumnEncryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithDatabaseVault">resetTargetsWithDatabaseVault</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithExternalAuthentication">resetTargetsWithExternalAuthentication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithFineGrainedAudit">resetTargetsWithFineGrainedAudit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithGlobalAuthentication">resetTargetsWithGlobalAuthentication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithNetworkEncryption">resetTargetsWithNetworkEncryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithPasswordAuthentication">resetTargetsWithPasswordAuthentication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithPrivilegeAnalysis">resetTargetsWithPrivilegeAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithTablespaceEncryption">resetTargetsWithTablespaceEncryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithTraditionalAudit">resetTargetsWithTraditionalAudit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithUnifiedAudit">resetTargetsWithUnifiedAudit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

##### `resetTargetsWithColumnEncryption` <a name="resetTargetsWithColumnEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithColumnEncryption"></a>

```typescript
public resetTargetsWithColumnEncryption(): void
```

##### `resetTargetsWithDatabaseVault` <a name="resetTargetsWithDatabaseVault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithDatabaseVault"></a>

```typescript
public resetTargetsWithDatabaseVault(): void
```

##### `resetTargetsWithExternalAuthentication` <a name="resetTargetsWithExternalAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithExternalAuthentication"></a>

```typescript
public resetTargetsWithExternalAuthentication(): void
```

##### `resetTargetsWithFineGrainedAudit` <a name="resetTargetsWithFineGrainedAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithFineGrainedAudit"></a>

```typescript
public resetTargetsWithFineGrainedAudit(): void
```

##### `resetTargetsWithGlobalAuthentication` <a name="resetTargetsWithGlobalAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithGlobalAuthentication"></a>

```typescript
public resetTargetsWithGlobalAuthentication(): void
```

##### `resetTargetsWithNetworkEncryption` <a name="resetTargetsWithNetworkEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithNetworkEncryption"></a>

```typescript
public resetTargetsWithNetworkEncryption(): void
```

##### `resetTargetsWithPasswordAuthentication` <a name="resetTargetsWithPasswordAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithPasswordAuthentication"></a>

```typescript
public resetTargetsWithPasswordAuthentication(): void
```

##### `resetTargetsWithPrivilegeAnalysis` <a name="resetTargetsWithPrivilegeAnalysis" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithPrivilegeAnalysis"></a>

```typescript
public resetTargetsWithPrivilegeAnalysis(): void
```

##### `resetTargetsWithTablespaceEncryption` <a name="resetTargetsWithTablespaceEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithTablespaceEncryption"></a>

```typescript
public resetTargetsWithTablespaceEncryption(): void
```

##### `resetTargetsWithTraditionalAudit` <a name="resetTargetsWithTraditionalAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithTraditionalAudit"></a>

```typescript
public resetTargetsWithTraditionalAudit(): void
```

##### `resetTargetsWithUnifiedAudit` <a name="resetTargetsWithUnifiedAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithUnifiedAudit"></a>

```typescript
public resetTargetsWithUnifiedAudit(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentSecurityFeatures resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isConstruct"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatures } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatures } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatures } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatures } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentSecurityFeatures resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentSecurityFeatures to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSecurityAssessmentSecurityFeatures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentSecurityFeatures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.securityFeatureCollection">securityFeatureCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithColumnEncryptionInput">targetsWithColumnEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithDatabaseVaultInput">targetsWithDatabaseVaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithExternalAuthenticationInput">targetsWithExternalAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithFineGrainedAuditInput">targetsWithFineGrainedAuditInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithGlobalAuthenticationInput">targetsWithGlobalAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithNetworkEncryptionInput">targetsWithNetworkEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPasswordAuthenticationInput">targetsWithPasswordAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPrivilegeAnalysisInput">targetsWithPrivilegeAnalysisInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTablespaceEncryptionInput">targetsWithTablespaceEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTraditionalAuditInput">targetsWithTraditionalAuditInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithUnifiedAuditInput">targetsWithUnifiedAuditInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithColumnEncryption">targetsWithColumnEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithDatabaseVault">targetsWithDatabaseVault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithExternalAuthentication">targetsWithExternalAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithFineGrainedAudit">targetsWithFineGrainedAudit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithGlobalAuthentication">targetsWithGlobalAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithNetworkEncryption">targetsWithNetworkEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPasswordAuthentication">targetsWithPasswordAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPrivilegeAnalysis">targetsWithPrivilegeAnalysis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTablespaceEncryption">targetsWithTablespaceEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTraditionalAudit">targetsWithTraditionalAudit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithUnifiedAudit">targetsWithUnifiedAudit</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList</a>

---

##### `securityFeatureCollection`<sup>Required</sup> <a name="securityFeatureCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.securityFeatureCollection"></a>

```typescript
public readonly securityFeatureCollection: DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `targetsWithColumnEncryptionInput`<sup>Optional</sup> <a name="targetsWithColumnEncryptionInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithColumnEncryptionInput"></a>

```typescript
public readonly targetsWithColumnEncryptionInput: string;
```

- *Type:* string

---

##### `targetsWithDatabaseVaultInput`<sup>Optional</sup> <a name="targetsWithDatabaseVaultInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithDatabaseVaultInput"></a>

```typescript
public readonly targetsWithDatabaseVaultInput: string;
```

- *Type:* string

---

##### `targetsWithExternalAuthenticationInput`<sup>Optional</sup> <a name="targetsWithExternalAuthenticationInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithExternalAuthenticationInput"></a>

```typescript
public readonly targetsWithExternalAuthenticationInput: string;
```

- *Type:* string

---

##### `targetsWithFineGrainedAuditInput`<sup>Optional</sup> <a name="targetsWithFineGrainedAuditInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithFineGrainedAuditInput"></a>

```typescript
public readonly targetsWithFineGrainedAuditInput: string;
```

- *Type:* string

---

##### `targetsWithGlobalAuthenticationInput`<sup>Optional</sup> <a name="targetsWithGlobalAuthenticationInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithGlobalAuthenticationInput"></a>

```typescript
public readonly targetsWithGlobalAuthenticationInput: string;
```

- *Type:* string

---

##### `targetsWithNetworkEncryptionInput`<sup>Optional</sup> <a name="targetsWithNetworkEncryptionInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithNetworkEncryptionInput"></a>

```typescript
public readonly targetsWithNetworkEncryptionInput: string;
```

- *Type:* string

---

##### `targetsWithPasswordAuthenticationInput`<sup>Optional</sup> <a name="targetsWithPasswordAuthenticationInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPasswordAuthenticationInput"></a>

```typescript
public readonly targetsWithPasswordAuthenticationInput: string;
```

- *Type:* string

---

##### `targetsWithPrivilegeAnalysisInput`<sup>Optional</sup> <a name="targetsWithPrivilegeAnalysisInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPrivilegeAnalysisInput"></a>

```typescript
public readonly targetsWithPrivilegeAnalysisInput: string;
```

- *Type:* string

---

##### `targetsWithTablespaceEncryptionInput`<sup>Optional</sup> <a name="targetsWithTablespaceEncryptionInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTablespaceEncryptionInput"></a>

```typescript
public readonly targetsWithTablespaceEncryptionInput: string;
```

- *Type:* string

---

##### `targetsWithTraditionalAuditInput`<sup>Optional</sup> <a name="targetsWithTraditionalAuditInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTraditionalAuditInput"></a>

```typescript
public readonly targetsWithTraditionalAuditInput: string;
```

- *Type:* string

---

##### `targetsWithUnifiedAuditInput`<sup>Optional</sup> <a name="targetsWithUnifiedAuditInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithUnifiedAuditInput"></a>

```typescript
public readonly targetsWithUnifiedAuditInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `targetsWithColumnEncryption`<sup>Required</sup> <a name="targetsWithColumnEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithColumnEncryption"></a>

```typescript
public readonly targetsWithColumnEncryption: string;
```

- *Type:* string

---

##### `targetsWithDatabaseVault`<sup>Required</sup> <a name="targetsWithDatabaseVault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithDatabaseVault"></a>

```typescript
public readonly targetsWithDatabaseVault: string;
```

- *Type:* string

---

##### `targetsWithExternalAuthentication`<sup>Required</sup> <a name="targetsWithExternalAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithExternalAuthentication"></a>

```typescript
public readonly targetsWithExternalAuthentication: string;
```

- *Type:* string

---

##### `targetsWithFineGrainedAudit`<sup>Required</sup> <a name="targetsWithFineGrainedAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithFineGrainedAudit"></a>

```typescript
public readonly targetsWithFineGrainedAudit: string;
```

- *Type:* string

---

##### `targetsWithGlobalAuthentication`<sup>Required</sup> <a name="targetsWithGlobalAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithGlobalAuthentication"></a>

```typescript
public readonly targetsWithGlobalAuthentication: string;
```

- *Type:* string

---

##### `targetsWithNetworkEncryption`<sup>Required</sup> <a name="targetsWithNetworkEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithNetworkEncryption"></a>

```typescript
public readonly targetsWithNetworkEncryption: string;
```

- *Type:* string

---

##### `targetsWithPasswordAuthentication`<sup>Required</sup> <a name="targetsWithPasswordAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPasswordAuthentication"></a>

```typescript
public readonly targetsWithPasswordAuthentication: string;
```

- *Type:* string

---

##### `targetsWithPrivilegeAnalysis`<sup>Required</sup> <a name="targetsWithPrivilegeAnalysis" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPrivilegeAnalysis"></a>

```typescript
public readonly targetsWithPrivilegeAnalysis: string;
```

- *Type:* string

---

##### `targetsWithTablespaceEncryption`<sup>Required</sup> <a name="targetsWithTablespaceEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTablespaceEncryption"></a>

```typescript
public readonly targetsWithTablespaceEncryption: string;
```

- *Type:* string

---

##### `targetsWithTraditionalAudit`<sup>Required</sup> <a name="targetsWithTraditionalAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTraditionalAudit"></a>

```typescript
public readonly targetsWithTraditionalAudit: string;
```

- *Type:* string

---

##### `targetsWithUnifiedAudit`<sup>Required</sup> <a name="targetsWithUnifiedAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithUnifiedAudit"></a>

```typescript
public readonly targetsWithUnifiedAudit: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatures } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentSecurityFeaturesConfig: dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#compartment_id DataOciDataSafeSecurityAssessmentSecurityFeatures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#access_level DataOciDataSafeSecurityAssessmentSecurityFeatures#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentSecurityFeatures#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#id DataOciDataSafeSecurityAssessmentSecurityFeatures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#target_id DataOciDataSafeSecurityAssessmentSecurityFeatures#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithColumnEncryption">targetsWithColumnEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_column_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_column_encryption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithDatabaseVault">targetsWithDatabaseVault</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_database_vault DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_database_vault}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithExternalAuthentication">targetsWithExternalAuthentication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_external_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_external_authentication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithFineGrainedAudit">targetsWithFineGrainedAudit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_fine_grained_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_fine_grained_audit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithGlobalAuthentication">targetsWithGlobalAuthentication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_global_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_global_authentication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithNetworkEncryption">targetsWithNetworkEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_network_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_network_encryption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithPasswordAuthentication">targetsWithPasswordAuthentication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_password_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_password_authentication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithPrivilegeAnalysis">targetsWithPrivilegeAnalysis</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_privilege_analysis DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_privilege_analysis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithTablespaceEncryption">targetsWithTablespaceEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_tablespace_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_tablespace_encryption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithTraditionalAudit">targetsWithTraditionalAudit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_traditional_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_traditional_audit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithUnifiedAudit">targetsWithUnifiedAudit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_unified_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_unified_audit}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#compartment_id DataOciDataSafeSecurityAssessmentSecurityFeatures#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#access_level DataOciDataSafeSecurityAssessmentSecurityFeatures#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentSecurityFeatures#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#filter DataOciDataSafeSecurityAssessmentSecurityFeatures#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#id DataOciDataSafeSecurityAssessmentSecurityFeatures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#target_id DataOciDataSafeSecurityAssessmentSecurityFeatures#target_id}.

---

##### `targetsWithColumnEncryption`<sup>Optional</sup> <a name="targetsWithColumnEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithColumnEncryption"></a>

```typescript
public readonly targetsWithColumnEncryption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_column_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_column_encryption}.

---

##### `targetsWithDatabaseVault`<sup>Optional</sup> <a name="targetsWithDatabaseVault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithDatabaseVault"></a>

```typescript
public readonly targetsWithDatabaseVault: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_database_vault DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_database_vault}.

---

##### `targetsWithExternalAuthentication`<sup>Optional</sup> <a name="targetsWithExternalAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithExternalAuthentication"></a>

```typescript
public readonly targetsWithExternalAuthentication: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_external_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_external_authentication}.

---

##### `targetsWithFineGrainedAudit`<sup>Optional</sup> <a name="targetsWithFineGrainedAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithFineGrainedAudit"></a>

```typescript
public readonly targetsWithFineGrainedAudit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_fine_grained_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_fine_grained_audit}.

---

##### `targetsWithGlobalAuthentication`<sup>Optional</sup> <a name="targetsWithGlobalAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithGlobalAuthentication"></a>

```typescript
public readonly targetsWithGlobalAuthentication: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_global_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_global_authentication}.

---

##### `targetsWithNetworkEncryption`<sup>Optional</sup> <a name="targetsWithNetworkEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithNetworkEncryption"></a>

```typescript
public readonly targetsWithNetworkEncryption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_network_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_network_encryption}.

---

##### `targetsWithPasswordAuthentication`<sup>Optional</sup> <a name="targetsWithPasswordAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithPasswordAuthentication"></a>

```typescript
public readonly targetsWithPasswordAuthentication: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_password_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_password_authentication}.

---

##### `targetsWithPrivilegeAnalysis`<sup>Optional</sup> <a name="targetsWithPrivilegeAnalysis" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithPrivilegeAnalysis"></a>

```typescript
public readonly targetsWithPrivilegeAnalysis: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_privilege_analysis DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_privilege_analysis}.

---

##### `targetsWithTablespaceEncryption`<sup>Optional</sup> <a name="targetsWithTablespaceEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithTablespaceEncryption"></a>

```typescript
public readonly targetsWithTablespaceEncryption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_tablespace_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_tablespace_encryption}.

---

##### `targetsWithTraditionalAudit`<sup>Optional</sup> <a name="targetsWithTraditionalAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithTraditionalAudit"></a>

```typescript
public readonly targetsWithTraditionalAudit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_traditional_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_traditional_audit}.

---

##### `targetsWithUnifiedAudit`<sup>Optional</sup> <a name="targetsWithUnifiedAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithUnifiedAudit"></a>

```typescript
public readonly targetsWithUnifiedAudit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_unified_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_unified_audit}.

---

### DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatures } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentSecurityFeaturesFilter: dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#name DataOciDataSafeSecurityAssessmentSecurityFeatures#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#values DataOciDataSafeSecurityAssessmentSecurityFeatures#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#regex DataOciDataSafeSecurityAssessmentSecurityFeatures#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#name DataOciDataSafeSecurityAssessmentSecurityFeatures#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#values DataOciDataSafeSecurityAssessmentSecurityFeatures#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#regex DataOciDataSafeSecurityAssessmentSecurityFeatures#regex}.

---

### DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatures } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection: dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection = { ... }
```


### DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatures } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems: dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatures } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>[]

---


### DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatures } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>

---


### DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatures } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatures } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.assessmentId">assessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.columnEncryption">columnEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.databaseVault">databaseVault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.externalAuthentication">externalAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.fineGrainedAudit">fineGrainedAudit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.globalAuthentication">globalAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.networkEncryption">networkEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.passwordAuthentication">passwordAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.privilegeAnalysis">privilegeAnalysis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.tablespaceEncryption">tablespaceEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.traditionalAudit">traditionalAudit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.unifiedAudit">unifiedAudit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assessmentId`<sup>Required</sup> <a name="assessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.assessmentId"></a>

```typescript
public readonly assessmentId: string;
```

- *Type:* string

---

##### `columnEncryption`<sup>Required</sup> <a name="columnEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.columnEncryption"></a>

```typescript
public readonly columnEncryption: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseVault`<sup>Required</sup> <a name="databaseVault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.databaseVault"></a>

```typescript
public readonly databaseVault: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `externalAuthentication`<sup>Required</sup> <a name="externalAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.externalAuthentication"></a>

```typescript
public readonly externalAuthentication: string;
```

- *Type:* string

---

##### `fineGrainedAudit`<sup>Required</sup> <a name="fineGrainedAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.fineGrainedAudit"></a>

```typescript
public readonly fineGrainedAudit: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `globalAuthentication`<sup>Required</sup> <a name="globalAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.globalAuthentication"></a>

```typescript
public readonly globalAuthentication: string;
```

- *Type:* string

---

##### `networkEncryption`<sup>Required</sup> <a name="networkEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.networkEncryption"></a>

```typescript
public readonly networkEncryption: string;
```

- *Type:* string

---

##### `passwordAuthentication`<sup>Required</sup> <a name="passwordAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.passwordAuthentication"></a>

```typescript
public readonly passwordAuthentication: string;
```

- *Type:* string

---

##### `privilegeAnalysis`<sup>Required</sup> <a name="privilegeAnalysis" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.privilegeAnalysis"></a>

```typescript
public readonly privilegeAnalysis: string;
```

- *Type:* string

---

##### `tablespaceEncryption`<sup>Required</sup> <a name="tablespaceEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.tablespaceEncryption"></a>

```typescript
public readonly tablespaceEncryption: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `traditionalAudit`<sup>Required</sup> <a name="traditionalAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.traditionalAudit"></a>

```typescript
public readonly traditionalAudit: string;
```

- *Type:* string

---

##### `unifiedAudit`<sup>Required</sup> <a name="unifiedAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.unifiedAudit"></a>

```typescript
public readonly unifiedAudit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems</a>

---


### DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatures } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatures } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection</a>

---



