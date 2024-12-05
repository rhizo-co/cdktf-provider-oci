# `dataOciFleetAppsManagementFleetResources` Submodule <a name="`dataOciFleetAppsManagementFleetResources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementFleetResources <a name="DataOciFleetAppsManagementFleetResources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources oci_fleet_apps_management_fleet_resources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fleet_apps_management_fleet_resources.DataOciFleetAppsManagementFleetResources;

DataOciFleetAppsManagementFleetResources.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .fleetId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciFleetAppsManagementFleetResourcesFilter>)
//  .fleetResourceType(java.lang.String)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .tenancyId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.fleetId">fleetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#fleet_id DataOciFleetAppsManagementFleetResources#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#display_name DataOciFleetAppsManagementFleetResources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.fleetResourceType">fleetResourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#fleet_resource_type DataOciFleetAppsManagementFleetResources#fleet_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#id DataOciFleetAppsManagementFleetResources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#state DataOciFleetAppsManagementFleetResources#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#tenancy_id DataOciFleetAppsManagementFleetResources#tenancy_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.fleetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#fleet_id DataOciFleetAppsManagementFleetResources#fleet_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#display_name DataOciFleetAppsManagementFleetResources#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#filter DataOciFleetAppsManagementFleetResources#filter}

---

##### `fleetResourceType`<sup>Optional</sup> <a name="fleetResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.fleetResourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#fleet_resource_type DataOciFleetAppsManagementFleetResources#fleet_resource_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#id DataOciFleetAppsManagementFleetResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#state DataOciFleetAppsManagementFleetResources#state}.

---

##### `tenancyId`<sup>Optional</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.tenancyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#tenancy_id DataOciFleetAppsManagementFleetResources#tenancy_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetFleetResourceType">resetFleetResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetTenancyId">resetTenancyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciFleetAppsManagementFleetResourcesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetFleetResourceType` <a name="resetFleetResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetFleetResourceType"></a>

```java
public void resetFleetResourceType()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetState"></a>

```java
public void resetState()
```

##### `resetTenancyId` <a name="resetTenancyId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetTenancyId"></a>

```java
public void resetTenancyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementFleetResources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fleet_apps_management_fleet_resources.DataOciFleetAppsManagementFleetResources;

DataOciFleetAppsManagementFleetResources.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fleet_apps_management_fleet_resources.DataOciFleetAppsManagementFleetResources;

DataOciFleetAppsManagementFleetResources.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fleet_apps_management_fleet_resources.DataOciFleetAppsManagementFleetResources;

DataOciFleetAppsManagementFleetResources.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fleet_apps_management_fleet_resources.DataOciFleetAppsManagementFleetResources;

DataOciFleetAppsManagementFleetResources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciFleetAppsManagementFleetResources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementFleetResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciFleetAppsManagementFleetResources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciFleetAppsManagementFleetResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementFleetResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList">DataOciFleetAppsManagementFleetResourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetResourceCollection">fleetResourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList">DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetIdInput">fleetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetResourceTypeInput">fleetResourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.tenancyIdInput">tenancyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetId">fleetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetResourceType">fleetResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.filter"></a>

```java
public DataOciFleetAppsManagementFleetResourcesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList">DataOciFleetAppsManagementFleetResourcesFilterList</a>

---

##### `fleetResourceCollection`<sup>Required</sup> <a name="fleetResourceCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetResourceCollection"></a>

```java
public DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList getFleetResourceCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList">DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>>

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetIdInput"></a>

```java
public java.lang.String getFleetIdInput();
```

- *Type:* java.lang.String

---

##### `fleetResourceTypeInput`<sup>Optional</sup> <a name="fleetResourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetResourceTypeInput"></a>

```java
public java.lang.String getFleetResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `tenancyIdInput`<sup>Optional</sup> <a name="tenancyIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.tenancyIdInput"></a>

```java
public java.lang.String getTenancyIdInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetId"></a>

```java
public java.lang.String getFleetId();
```

- *Type:* java.lang.String

---

##### `fleetResourceType`<sup>Required</sup> <a name="fleetResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetResourceType"></a>

```java
public java.lang.String getFleetResourceType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.tenancyId"></a>

```java
public java.lang.String getTenancyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementFleetResourcesConfig <a name="DataOciFleetAppsManagementFleetResourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fleet_apps_management_fleet_resources.DataOciFleetAppsManagementFleetResourcesConfig;

DataOciFleetAppsManagementFleetResourcesConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .fleetId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciFleetAppsManagementFleetResourcesFilter>)
//  .fleetResourceType(java.lang.String)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .tenancyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.fleetId">fleetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#fleet_id DataOciFleetAppsManagementFleetResources#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#display_name DataOciFleetAppsManagementFleetResources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.fleetResourceType">fleetResourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#fleet_resource_type DataOciFleetAppsManagementFleetResources#fleet_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#id DataOciFleetAppsManagementFleetResources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#state DataOciFleetAppsManagementFleetResources#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#tenancy_id DataOciFleetAppsManagementFleetResources#tenancy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.fleetId"></a>

```java
public java.lang.String getFleetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#fleet_id DataOciFleetAppsManagementFleetResources#fleet_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#display_name DataOciFleetAppsManagementFleetResources#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#filter DataOciFleetAppsManagementFleetResources#filter}

---

##### `fleetResourceType`<sup>Optional</sup> <a name="fleetResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.fleetResourceType"></a>

```java
public java.lang.String getFleetResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#fleet_resource_type DataOciFleetAppsManagementFleetResources#fleet_resource_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#id DataOciFleetAppsManagementFleetResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#state DataOciFleetAppsManagementFleetResources#state}.

---

##### `tenancyId`<sup>Optional</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.tenancyId"></a>

```java
public java.lang.String getTenancyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#tenancy_id DataOciFleetAppsManagementFleetResources#tenancy_id}.

---

### DataOciFleetAppsManagementFleetResourcesFilter <a name="DataOciFleetAppsManagementFleetResourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fleet_apps_management_fleet_resources.DataOciFleetAppsManagementFleetResourcesFilter;

DataOciFleetAppsManagementFleetResourcesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#name DataOciFleetAppsManagementFleetResources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#values DataOciFleetAppsManagementFleetResources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#regex DataOciFleetAppsManagementFleetResources#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#name DataOciFleetAppsManagementFleetResources#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#values DataOciFleetAppsManagementFleetResources#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#regex DataOciFleetAppsManagementFleetResources#regex}.

---

### DataOciFleetAppsManagementFleetResourcesFleetResourceCollection <a name="DataOciFleetAppsManagementFleetResourcesFleetResourceCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fleet_apps_management_fleet_resources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollection;

DataOciFleetAppsManagementFleetResourcesFleetResourceCollection.builder()
    .build();
```


### DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems <a name="DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fleet_apps_management_fleet_resources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems;

DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementFleetResourcesFilterList <a name="DataOciFleetAppsManagementFleetResourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fleet_apps_management_fleet_resources.DataOciFleetAppsManagementFleetResourcesFilterList;

new DataOciFleetAppsManagementFleetResourcesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.get"></a>

```java
public DataOciFleetAppsManagementFleetResourcesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>>

---


### DataOciFleetAppsManagementFleetResourcesFilterOutputReference <a name="DataOciFleetAppsManagementFleetResourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fleet_apps_management_fleet_resources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference;

new DataOciFleetAppsManagementFleetResourcesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>

---


### DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList <a name="DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fleet_apps_management_fleet_resources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList;

new DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.get"></a>

```java
public DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference <a name="DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fleet_apps_management_fleet_resources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference;

new DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.applicationType">applicationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.compartment">compartment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.complianceState">complianceState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.environmentType">environmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.fleetId">fleetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.product">product</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.productCount">productCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.resourceRegion">resourceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.targetCount">targetCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.tenancyName">tenancyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems">DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.applicationType"></a>

```java
public java.lang.String getApplicationType();
```

- *Type:* java.lang.String

---

##### `compartment`<sup>Required</sup> <a name="compartment" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.compartment"></a>

```java
public java.lang.String getCompartment();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `complianceState`<sup>Required</sup> <a name="complianceState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.complianceState"></a>

```java
public java.lang.String getComplianceState();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.environmentType"></a>

```java
public java.lang.String getEnvironmentType();
```

- *Type:* java.lang.String

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.fleetId"></a>

```java
public java.lang.String getFleetId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

---

##### `productCount`<sup>Required</sup> <a name="productCount" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.productCount"></a>

```java
public java.lang.Number getProductCount();
```

- *Type:* java.lang.Number

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.resourceRegion"></a>

```java
public java.lang.String getResourceRegion();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `targetCount`<sup>Required</sup> <a name="targetCount" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.targetCount"></a>

```java
public java.lang.Number getTargetCount();
```

- *Type:* java.lang.Number

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.tenancyId"></a>

```java
public java.lang.String getTenancyId();
```

- *Type:* java.lang.String

---

##### `tenancyName`<sup>Required</sup> <a name="tenancyName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.tenancyName"></a>

```java
public java.lang.String getTenancyName();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems">DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems</a>

---


### DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList <a name="DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fleet_apps_management_fleet_resources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList;

new DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.get"></a>

```java
public DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference <a name="DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fleet_apps_management_fleet_resources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference;

new DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList">DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollection">DataOciFleetAppsManagementFleetResourcesFleetResourceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.property.items"></a>

```java
public DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList">DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.property.internalValue"></a>

```java
public DataOciFleetAppsManagementFleetResourcesFleetResourceCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollection">DataOciFleetAppsManagementFleetResourcesFleetResourceCollection</a>

---



