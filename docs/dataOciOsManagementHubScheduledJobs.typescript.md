# `dataOciOsManagementHubScheduledJobs` Submodule <a name="`dataOciOsManagementHubScheduledJobs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubScheduledJobs <a name="DataOciOsManagementHubScheduledJobs" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs oci_os_management_hub_scheduled_jobs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs(scope: Construct, id: string, config?: DataOciOsManagementHubScheduledJobsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig">DataOciOsManagementHubScheduledJobsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig">DataOciOsManagementHubScheduledJobsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetIsManagedByAutonomousLinux">resetIsManagedByAutonomousLinux</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetIsRestricted">resetIsRestricted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetLifecycleStageId">resetLifecycleStageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetLocationNotEqualTo">resetLocationNotEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetManagedCompartmentId">resetManagedCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetManagedInstanceGroupId">resetManagedInstanceGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetManagedInstanceId">resetManagedInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetOperationType">resetOperationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetScheduleType">resetScheduleType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetTimeEnd">resetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetTimeStart">resetTimeStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsManagementHubScheduledJobsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetDisplayNameContains"></a>

```typescript
public resetDisplayNameContains(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsManagedByAutonomousLinux` <a name="resetIsManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetIsManagedByAutonomousLinux"></a>

```typescript
public resetIsManagedByAutonomousLinux(): void
```

##### `resetIsRestricted` <a name="resetIsRestricted" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetIsRestricted"></a>

```typescript
public resetIsRestricted(): void
```

##### `resetLifecycleStageId` <a name="resetLifecycleStageId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetLifecycleStageId"></a>

```typescript
public resetLifecycleStageId(): void
```

##### `resetLocation` <a name="resetLocation" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetLocationNotEqualTo` <a name="resetLocationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetLocationNotEqualTo"></a>

```typescript
public resetLocationNotEqualTo(): void
```

##### `resetManagedCompartmentId` <a name="resetManagedCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetManagedCompartmentId"></a>

```typescript
public resetManagedCompartmentId(): void
```

##### `resetManagedInstanceGroupId` <a name="resetManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetManagedInstanceGroupId"></a>

```typescript
public resetManagedInstanceGroupId(): void
```

##### `resetManagedInstanceId` <a name="resetManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetManagedInstanceId"></a>

```typescript
public resetManagedInstanceId(): void
```

##### `resetOperationType` <a name="resetOperationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetOperationType"></a>

```typescript
public resetOperationType(): void
```

##### `resetScheduleType` <a name="resetScheduleType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetScheduleType"></a>

```typescript
public resetScheduleType(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeEnd` <a name="resetTimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetTimeEnd"></a>

```typescript
public resetTimeEnd(): void
```

##### `resetTimeStart` <a name="resetTimeStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetTimeStart"></a>

```typescript
public resetTimeStart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubScheduledJobs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isConstruct"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformElement"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformDataSource"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsManagementHubScheduledJobs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubScheduledJobs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubScheduledJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubScheduledJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList">DataOciOsManagementHubScheduledJobsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.scheduledJobCollection">scheduledJobCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isManagedByAutonomousLinuxInput">isManagedByAutonomousLinuxInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isRestrictedInput">isRestrictedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.lifecycleStageIdInput">lifecycleStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.locationInput">locationInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.locationNotEqualToInput">locationNotEqualToInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedCompartmentIdInput">managedCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceGroupIdInput">managedInstanceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.operationTypeInput">operationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.scheduleTypeInput">scheduleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeEndInput">timeEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeStartInput">timeStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isManagedByAutonomousLinux">isManagedByAutonomousLinux</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isRestricted">isRestricted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.lifecycleStageId">lifecycleStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.location">location</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.locationNotEqualTo">locationNotEqualTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedCompartmentId">managedCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.operationType">operationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.scheduleType">scheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.filter"></a>

```typescript
public readonly filter: DataOciOsManagementHubScheduledJobsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList">DataOciOsManagementHubScheduledJobsFilterList</a>

---

##### `scheduledJobCollection`<sup>Required</sup> <a name="scheduledJobCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.scheduledJobCollection"></a>

```typescript
public readonly scheduledJobCollection: DataOciOsManagementHubScheduledJobsScheduledJobCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayNameContainsInput"></a>

```typescript
public readonly displayNameContainsInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsManagementHubScheduledJobsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isManagedByAutonomousLinuxInput`<sup>Optional</sup> <a name="isManagedByAutonomousLinuxInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isManagedByAutonomousLinuxInput"></a>

```typescript
public readonly isManagedByAutonomousLinuxInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRestrictedInput`<sup>Optional</sup> <a name="isRestrictedInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isRestrictedInput"></a>

```typescript
public readonly isRestrictedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lifecycleStageIdInput`<sup>Optional</sup> <a name="lifecycleStageIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.lifecycleStageIdInput"></a>

```typescript
public readonly lifecycleStageIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.locationInput"></a>

```typescript
public readonly locationInput: string[];
```

- *Type:* string[]

---

##### `locationNotEqualToInput`<sup>Optional</sup> <a name="locationNotEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.locationNotEqualToInput"></a>

```typescript
public readonly locationNotEqualToInput: string[];
```

- *Type:* string[]

---

##### `managedCompartmentIdInput`<sup>Optional</sup> <a name="managedCompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedCompartmentIdInput"></a>

```typescript
public readonly managedCompartmentIdInput: string;
```

- *Type:* string

---

##### `managedInstanceGroupIdInput`<sup>Optional</sup> <a name="managedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceGroupIdInput"></a>

```typescript
public readonly managedInstanceGroupIdInput: string;
```

- *Type:* string

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceIdInput"></a>

```typescript
public readonly managedInstanceIdInput: string;
```

- *Type:* string

---

##### `operationTypeInput`<sup>Optional</sup> <a name="operationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.operationTypeInput"></a>

```typescript
public readonly operationTypeInput: string;
```

- *Type:* string

---

##### `scheduleTypeInput`<sup>Optional</sup> <a name="scheduleTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.scheduleTypeInput"></a>

```typescript
public readonly scheduleTypeInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeEndInput`<sup>Optional</sup> <a name="timeEndInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeEndInput"></a>

```typescript
public readonly timeEndInput: string;
```

- *Type:* string

---

##### `timeStartInput`<sup>Optional</sup> <a name="timeStartInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeStartInput"></a>

```typescript
public readonly timeStartInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isManagedByAutonomousLinux`<sup>Required</sup> <a name="isManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isManagedByAutonomousLinux"></a>

```typescript
public readonly isManagedByAutonomousLinux: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRestricted`<sup>Required</sup> <a name="isRestricted" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isRestricted"></a>

```typescript
public readonly isRestricted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lifecycleStageId`<sup>Required</sup> <a name="lifecycleStageId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.lifecycleStageId"></a>

```typescript
public readonly lifecycleStageId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.location"></a>

```typescript
public readonly location: string[];
```

- *Type:* string[]

---

##### `locationNotEqualTo`<sup>Required</sup> <a name="locationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.locationNotEqualTo"></a>

```typescript
public readonly locationNotEqualTo: string[];
```

- *Type:* string[]

---

##### `managedCompartmentId`<sup>Required</sup> <a name="managedCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedCompartmentId"></a>

```typescript
public readonly managedCompartmentId: string;
```

- *Type:* string

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.operationType"></a>

```typescript
public readonly operationType: string;
```

- *Type:* string

---

##### `scheduleType`<sup>Required</sup> <a name="scheduleType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.scheduleType"></a>

```typescript
public readonly scheduleType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubScheduledJobsConfig <a name="DataOciOsManagementHubScheduledJobsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubScheduledJobsConfig: dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#compartment_id DataOciOsManagementHubScheduledJobs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#compartment_id_in_subtree DataOciOsManagementHubScheduledJobs#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#display_name DataOciOsManagementHubScheduledJobs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#display_name_contains DataOciOsManagementHubScheduledJobs#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#id DataOciOsManagementHubScheduledJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.isManagedByAutonomousLinux">isManagedByAutonomousLinux</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#is_managed_by_autonomous_linux DataOciOsManagementHubScheduledJobs#is_managed_by_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.isRestricted">isRestricted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#is_restricted DataOciOsManagementHubScheduledJobs#is_restricted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.lifecycleStageId">lifecycleStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#lifecycle_stage_id DataOciOsManagementHubScheduledJobs#lifecycle_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.location">location</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#location DataOciOsManagementHubScheduledJobs#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.locationNotEqualTo">locationNotEqualTo</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#location_not_equal_to DataOciOsManagementHubScheduledJobs#location_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.managedCompartmentId">managedCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_compartment_id DataOciOsManagementHubScheduledJobs#managed_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_instance_group_id DataOciOsManagementHubScheduledJobs#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_instance_id DataOciOsManagementHubScheduledJobs#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.operationType">operationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#operation_type DataOciOsManagementHubScheduledJobs#operation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.scheduleType">scheduleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#schedule_type DataOciOsManagementHubScheduledJobs#schedule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#state DataOciOsManagementHubScheduledJobs#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.timeEnd">timeEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#time_end DataOciOsManagementHubScheduledJobs#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.timeStart">timeStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#time_start DataOciOsManagementHubScheduledJobs#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#compartment_id DataOciOsManagementHubScheduledJobs#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#compartment_id_in_subtree DataOciOsManagementHubScheduledJobs#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#display_name DataOciOsManagementHubScheduledJobs#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#display_name_contains DataOciOsManagementHubScheduledJobs#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsManagementHubScheduledJobsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#filter DataOciOsManagementHubScheduledJobs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#id DataOciOsManagementHubScheduledJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isManagedByAutonomousLinux`<sup>Optional</sup> <a name="isManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.isManagedByAutonomousLinux"></a>

```typescript
public readonly isManagedByAutonomousLinux: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#is_managed_by_autonomous_linux DataOciOsManagementHubScheduledJobs#is_managed_by_autonomous_linux}.

---

##### `isRestricted`<sup>Optional</sup> <a name="isRestricted" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.isRestricted"></a>

```typescript
public readonly isRestricted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#is_restricted DataOciOsManagementHubScheduledJobs#is_restricted}.

---

##### `lifecycleStageId`<sup>Optional</sup> <a name="lifecycleStageId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.lifecycleStageId"></a>

```typescript
public readonly lifecycleStageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#lifecycle_stage_id DataOciOsManagementHubScheduledJobs#lifecycle_stage_id}.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.location"></a>

```typescript
public readonly location: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#location DataOciOsManagementHubScheduledJobs#location}.

---

##### `locationNotEqualTo`<sup>Optional</sup> <a name="locationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.locationNotEqualTo"></a>

```typescript
public readonly locationNotEqualTo: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#location_not_equal_to DataOciOsManagementHubScheduledJobs#location_not_equal_to}.

---

##### `managedCompartmentId`<sup>Optional</sup> <a name="managedCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.managedCompartmentId"></a>

```typescript
public readonly managedCompartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_compartment_id DataOciOsManagementHubScheduledJobs#managed_compartment_id}.

---

##### `managedInstanceGroupId`<sup>Optional</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_instance_group_id DataOciOsManagementHubScheduledJobs#managed_instance_group_id}.

---

##### `managedInstanceId`<sup>Optional</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_instance_id DataOciOsManagementHubScheduledJobs#managed_instance_id}.

---

##### `operationType`<sup>Optional</sup> <a name="operationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.operationType"></a>

```typescript
public readonly operationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#operation_type DataOciOsManagementHubScheduledJobs#operation_type}.

---

##### `scheduleType`<sup>Optional</sup> <a name="scheduleType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.scheduleType"></a>

```typescript
public readonly scheduleType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#schedule_type DataOciOsManagementHubScheduledJobs#schedule_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#state DataOciOsManagementHubScheduledJobs#state}.

---

##### `timeEnd`<sup>Optional</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#time_end DataOciOsManagementHubScheduledJobs#time_end}.

---

##### `timeStart`<sup>Optional</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#time_start DataOciOsManagementHubScheduledJobs#time_start}.

---

### DataOciOsManagementHubScheduledJobsFilter <a name="DataOciOsManagementHubScheduledJobsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubScheduledJobsFilter: dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#name DataOciOsManagementHubScheduledJobs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#values DataOciOsManagementHubScheduledJobs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#regex DataOciOsManagementHubScheduledJobs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#name DataOciOsManagementHubScheduledJobs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#values DataOciOsManagementHubScheduledJobs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#regex DataOciOsManagementHubScheduledJobs#regex}.

---

### DataOciOsManagementHubScheduledJobsScheduledJobCollection <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollection.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubScheduledJobsScheduledJobCollection: dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollection = { ... }
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubScheduledJobsScheduledJobCollectionItems: dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems = { ... }
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations: dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations = { ... }
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails: dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails = { ... }
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable: dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable = { ... }
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable: dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable = { ... }
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall: dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall = { ... }
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove: dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove = { ... }
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails: dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubScheduledJobsFilterList <a name="DataOciOsManagementHubScheduledJobsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubScheduledJobsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubScheduledJobsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>[]

---


### DataOciOsManagementHubScheduledJobsFilterOutputReference <a name="DataOciOsManagementHubScheduledJobsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubScheduledJobsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.disable">disable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.enable">enable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.install">install</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.remove">remove</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disable`<sup>Required</sup> <a name="disable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.disable"></a>

```typescript
public readonly disable: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.enable"></a>

```typescript
public readonly enable: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList</a>

---

##### `install`<sup>Required</sup> <a name="install" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.install"></a>

```typescript
public readonly install: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList</a>

---

##### `remove`<sup>Required</sup> <a name="remove" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.remove"></a>

```typescript
public readonly remove: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.manageModuleStreamsDetails">manageModuleStreamsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.operationType">operationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.packageNames">packageNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.softwareSourceIds">softwareSourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.switchModuleStreamsDetails">switchModuleStreamsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.windowsUpdateNames">windowsUpdateNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manageModuleStreamsDetails`<sup>Required</sup> <a name="manageModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.manageModuleStreamsDetails"></a>

```typescript
public readonly manageModuleStreamsDetails: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList</a>

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.operationType"></a>

```typescript
public readonly operationType: string;
```

- *Type:* string

---

##### `packageNames`<sup>Required</sup> <a name="packageNames" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.packageNames"></a>

```typescript
public readonly packageNames: string[];
```

- *Type:* string[]

---

##### `softwareSourceIds`<sup>Required</sup> <a name="softwareSourceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.softwareSourceIds"></a>

```typescript
public readonly softwareSourceIds: string[];
```

- *Type:* string[]

---

##### `switchModuleStreamsDetails`<sup>Required</sup> <a name="switchModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.switchModuleStreamsDetails"></a>

```typescript
public readonly switchModuleStreamsDetails: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList</a>

---

##### `windowsUpdateNames`<sup>Required</sup> <a name="windowsUpdateNames" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.windowsUpdateNames"></a>

```typescript
public readonly windowsUpdateNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.isManagedByAutonomousLinux">isManagedByAutonomousLinux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.isRestricted">isRestricted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.isSubcompartmentIncluded">isSubcompartmentIncluded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.lifecycleStageIds">lifecycleStageIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.managedCompartmentIds">managedCompartmentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.managedInstanceGroupIds">managedInstanceGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.managedInstanceIds">managedInstanceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.operations">operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.recurringRule">recurringRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.retryIntervals">retryIntervals</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.scheduleType">scheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeLastExecution">timeLastExecution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeNextExecution">timeNextExecution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.workRequestIds">workRequestIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isManagedByAutonomousLinux`<sup>Required</sup> <a name="isManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.isManagedByAutonomousLinux"></a>

```typescript
public readonly isManagedByAutonomousLinux: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRestricted`<sup>Required</sup> <a name="isRestricted" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.isRestricted"></a>

```typescript
public readonly isRestricted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSubcompartmentIncluded`<sup>Required</sup> <a name="isSubcompartmentIncluded" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.isSubcompartmentIncluded"></a>

```typescript
public readonly isSubcompartmentIncluded: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleStageIds`<sup>Required</sup> <a name="lifecycleStageIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.lifecycleStageIds"></a>

```typescript
public readonly lifecycleStageIds: string[];
```

- *Type:* string[]

---

##### `locations`<sup>Required</sup> <a name="locations" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `managedCompartmentIds`<sup>Required</sup> <a name="managedCompartmentIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.managedCompartmentIds"></a>

```typescript
public readonly managedCompartmentIds: string[];
```

- *Type:* string[]

---

##### `managedInstanceGroupIds`<sup>Required</sup> <a name="managedInstanceGroupIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.managedInstanceGroupIds"></a>

```typescript
public readonly managedInstanceGroupIds: string[];
```

- *Type:* string[]

---

##### `managedInstanceIds`<sup>Required</sup> <a name="managedInstanceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.managedInstanceIds"></a>

```typescript
public readonly managedInstanceIds: string[];
```

- *Type:* string[]

---

##### `operations`<sup>Required</sup> <a name="operations" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.operations"></a>

```typescript
public readonly operations: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList</a>

---

##### `recurringRule`<sup>Required</sup> <a name="recurringRule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.recurringRule"></a>

```typescript
public readonly recurringRule: string;
```

- *Type:* string

---

##### `retryIntervals`<sup>Required</sup> <a name="retryIntervals" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.retryIntervals"></a>

```typescript
public readonly retryIntervals: number[];
```

- *Type:* number[]

---

##### `scheduleType`<sup>Required</sup> <a name="scheduleType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.scheduleType"></a>

```typescript
public readonly scheduleType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastExecution`<sup>Required</sup> <a name="timeLastExecution" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeLastExecution"></a>

```typescript
public readonly timeLastExecution: string;
```

- *Type:* string

---

##### `timeNextExecution`<sup>Required</sup> <a name="timeNextExecution" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeNextExecution"></a>

```typescript
public readonly timeNextExecution: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `workRequestIds`<sup>Required</sup> <a name="workRequestIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.workRequestIds"></a>

```typescript
public readonly workRequestIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubScheduledJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollection">DataOciOsManagementHubScheduledJobsScheduledJobCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubScheduledJobsScheduledJobCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollection">DataOciOsManagementHubScheduledJobsScheduledJobCollection</a>

---



