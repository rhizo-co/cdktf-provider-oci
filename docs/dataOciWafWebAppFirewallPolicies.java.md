# `dataOciWafWebAppFirewallPolicies` Submodule <a name="`dataOciWafWebAppFirewallPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWafWebAppFirewallPolicies <a name="DataOciWafWebAppFirewallPolicies" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies oci_waf_web_app_firewall_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPolicies;

DataOciWafWebAppFirewallPolicies.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciWafWebAppFirewallPoliciesFilter>)
//  .id(java.lang.String)
//  .state(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#compartment_id DataOciWafWebAppFirewallPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#display_name DataOciWafWebAppFirewallPolicies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#id DataOciWafWebAppFirewallPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.state">state</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#state DataOciWafWebAppFirewallPolicies#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#compartment_id DataOciWafWebAppFirewallPolicies#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#display_name DataOciWafWebAppFirewallPolicies#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#filter DataOciWafWebAppFirewallPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#id DataOciWafWebAppFirewallPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.state"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#state DataOciWafWebAppFirewallPolicies#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciWafWebAppFirewallPoliciesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWafWebAppFirewallPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPolicies;

DataOciWafWebAppFirewallPolicies.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPolicies;

DataOciWafWebAppFirewallPolicies.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPolicies;

DataOciWafWebAppFirewallPolicies.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPolicies;

DataOciWafWebAppFirewallPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciWafWebAppFirewallPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciWafWebAppFirewallPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciWafWebAppFirewallPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciWafWebAppFirewallPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWafWebAppFirewallPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList">DataOciWafWebAppFirewallPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.webAppFirewallPolicyCollection">webAppFirewallPolicyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.stateInput">stateInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.state">state</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.filter"></a>

```java
public DataOciWafWebAppFirewallPoliciesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList">DataOciWafWebAppFirewallPoliciesFilterList</a>

---

##### `webAppFirewallPolicyCollection`<sup>Required</sup> <a name="webAppFirewallPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.webAppFirewallPolicyCollection"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList getWebAppFirewallPolicyCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.stateInput"></a>

```java
public java.util.List<java.lang.String> getStateInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.state"></a>

```java
public java.util.List<java.lang.String> getState();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWafWebAppFirewallPoliciesConfig <a name="DataOciWafWebAppFirewallPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesConfig;

DataOciWafWebAppFirewallPoliciesConfig.builder()
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
    .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciWafWebAppFirewallPoliciesFilter>)
//  .id(java.lang.String)
//  .state(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#compartment_id DataOciWafWebAppFirewallPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#display_name DataOciWafWebAppFirewallPolicies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#id DataOciWafWebAppFirewallPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.state">state</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#state DataOciWafWebAppFirewallPolicies#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#compartment_id DataOciWafWebAppFirewallPolicies#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#display_name DataOciWafWebAppFirewallPolicies#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#filter DataOciWafWebAppFirewallPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#id DataOciWafWebAppFirewallPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.state"></a>

```java
public java.util.List<java.lang.String> getState();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#state DataOciWafWebAppFirewallPolicies#state}.

---

### DataOciWafWebAppFirewallPoliciesFilter <a name="DataOciWafWebAppFirewallPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesFilter;

DataOciWafWebAppFirewallPoliciesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#name DataOciWafWebAppFirewallPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#values DataOciWafWebAppFirewallPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#regex DataOciWafWebAppFirewallPolicies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#name DataOciWafWebAppFirewallPolicies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#values DataOciWafWebAppFirewallPolicies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#regex DataOciWafWebAppFirewallPolicies#regex}.

---

### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions.builder()
    .build();
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings;

DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWafWebAppFirewallPoliciesFilterList <a name="DataOciWafWebAppFirewallPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesFilterList;

new DataOciWafWebAppFirewallPoliciesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>>

---


### DataOciWafWebAppFirewallPoliciesFilterOutputReference <a name="DataOciWafWebAppFirewallPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesFilterOutputReference;

new DataOciWafWebAppFirewallPoliciesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.template">template</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `template`<sup>Required</sup> <a name="template" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.body">body</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.headers">headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.body"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList getBody();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList</a>

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.headers"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList getHeaders();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.requestAccessControl">requestAccessControl</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.requestProtection">requestProtection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.requestRateLimiting">requestRateLimiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.responseAccessControl">responseAccessControl</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.responseProtection">responseProtection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.actions"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList getActions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `requestAccessControl`<sup>Required</sup> <a name="requestAccessControl" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.requestAccessControl"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList getRequestAccessControl();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList</a>

---

##### `requestProtection`<sup>Required</sup> <a name="requestProtection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.requestProtection"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList getRequestProtection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList</a>

---

##### `requestRateLimiting`<sup>Required</sup> <a name="requestRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.requestRateLimiting"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList getRequestRateLimiting();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList</a>

---

##### `responseAccessControl`<sup>Required</sup> <a name="responseAccessControl" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.responseAccessControl"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList getResponseAccessControl();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList</a>

---

##### `responseProtection`<sup>Required</sup> <a name="responseProtection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.responseProtection"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList getResponseProtection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.defaultActionName">defaultActionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultActionName`<sup>Required</sup> <a name="defaultActionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.defaultActionName"></a>

```java
public java.lang.String getDefaultActionName();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.rules"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.actionName">actionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.conditionLanguage">conditionLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.actionName"></a>

```java
public java.lang.String getActionName();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `conditionLanguage`<sup>Required</sup> <a name="conditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.conditionLanguage"></a>

```java
public java.lang.String getConditionLanguage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionName">bodyInspectionSizeLimitExceededActionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytes">bodyInspectionSizeLimitInBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bodyInspectionSizeLimitExceededActionName`<sup>Required</sup> <a name="bodyInspectionSizeLimitExceededActionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionName"></a>

```java
public java.lang.String getBodyInspectionSizeLimitExceededActionName();
```

- *Type:* java.lang.String

---

##### `bodyInspectionSizeLimitInBytes`<sup>Required</sup> <a name="bodyInspectionSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytes"></a>

```java
public java.lang.Number getBodyInspectionSizeLimitInBytes();
```

- *Type:* java.lang.Number

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.rules"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.actionName">actionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.conditionLanguage">conditionLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.isBodyInspectionEnabled">isBodyInspectionEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.protectionCapabilities">protectionCapabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.protectionCapabilitySettings">protectionCapabilitySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.actionName"></a>

```java
public java.lang.String getActionName();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `conditionLanguage`<sup>Required</sup> <a name="conditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.conditionLanguage"></a>

```java
public java.lang.String getConditionLanguage();
```

- *Type:* java.lang.String

---

##### `isBodyInspectionEnabled`<sup>Required</sup> <a name="isBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.isBodyInspectionEnabled"></a>

```java
public IResolvable getIsBodyInspectionEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protectionCapabilities`<sup>Required</sup> <a name="protectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.protectionCapabilities"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList getProtectionCapabilities();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList</a>

---

##### `protectionCapabilitySettings`<sup>Required</sup> <a name="protectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.protectionCapabilitySettings"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList getProtectionCapabilitySettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies">requestCookies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestCookies`<sup>Required</sup> <a name="requestCookies" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies"></a>

```java
public java.util.List<java.lang.String> getRequestCookies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionName">actionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold">collaborativeActionThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights">collaborativeWeights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions">exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionName"></a>

```java
public java.lang.String getActionName();
```

- *Type:* java.lang.String

---

##### `collaborativeActionThreshold`<sup>Required</sup> <a name="collaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold"></a>

```java
public java.lang.Number getCollaborativeActionThreshold();
```

- *Type:* java.lang.Number

---

##### `collaborativeWeights`<sup>Required</sup> <a name="collaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList getCollaborativeWeights();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList getExclusions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList</a>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods">allowedHttpMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength">maxHttpRequestHeaderLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders">maxHttpRequestHeaders</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments">maxNumberOfArguments</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength">maxSingleArgumentLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength">maxTotalArgumentLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedHttpMethods`<sup>Required</sup> <a name="allowedHttpMethods" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedHttpMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxHttpRequestHeaderLength`<sup>Required</sup> <a name="maxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength"></a>

```java
public java.lang.Number getMaxHttpRequestHeaderLength();
```

- *Type:* java.lang.Number

---

##### `maxHttpRequestHeaders`<sup>Required</sup> <a name="maxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders"></a>

```java
public java.lang.Number getMaxHttpRequestHeaders();
```

- *Type:* java.lang.Number

---

##### `maxNumberOfArguments`<sup>Required</sup> <a name="maxNumberOfArguments" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments"></a>

```java
public java.lang.Number getMaxNumberOfArguments();
```

- *Type:* java.lang.Number

---

##### `maxSingleArgumentLength`<sup>Required</sup> <a name="maxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength"></a>

```java
public java.lang.Number getMaxSingleArgumentLength();
```

- *Type:* java.lang.Number

---

##### `maxTotalArgumentLength`<sup>Required</sup> <a name="maxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength"></a>

```java
public java.lang.Number getMaxTotalArgumentLength();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.rules"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSeconds">actionDurationInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSeconds">periodInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimit">requestsLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionDurationInSeconds`<sup>Required</sup> <a name="actionDurationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSeconds"></a>

```java
public java.lang.Number getActionDurationInSeconds();
```

- *Type:* java.lang.Number

---

##### `periodInSeconds`<sup>Required</sup> <a name="periodInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSeconds"></a>

```java
public java.lang.Number getPeriodInSeconds();
```

- *Type:* java.lang.Number

---

##### `requestsLimit`<sup>Required</sup> <a name="requestsLimit" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimit"></a>

```java
public java.lang.Number getRequestsLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.actionName">actionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.conditionLanguage">conditionLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.actionName"></a>

```java
public java.lang.String getActionName();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `conditionLanguage`<sup>Required</sup> <a name="conditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.conditionLanguage"></a>

```java
public java.lang.String getConditionLanguage();
```

- *Type:* java.lang.String

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.configurations"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList getConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.rules"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.actionName">actionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.conditionLanguage">conditionLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.actionName"></a>

```java
public java.lang.String getActionName();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `conditionLanguage`<sup>Required</sup> <a name="conditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.conditionLanguage"></a>

```java
public java.lang.String getConditionLanguage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.rules"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.actionName">actionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.conditionLanguage">conditionLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.isBodyInspectionEnabled">isBodyInspectionEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.protectionCapabilities">protectionCapabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.protectionCapabilitySettings">protectionCapabilitySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.actionName"></a>

```java
public java.lang.String getActionName();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `conditionLanguage`<sup>Required</sup> <a name="conditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.conditionLanguage"></a>

```java
public java.lang.String getConditionLanguage();
```

- *Type:* java.lang.String

---

##### `isBodyInspectionEnabled`<sup>Required</sup> <a name="isBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.isBodyInspectionEnabled"></a>

```java
public IResolvable getIsBodyInspectionEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protectionCapabilities`<sup>Required</sup> <a name="protectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.protectionCapabilities"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList getProtectionCapabilities();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList</a>

---

##### `protectionCapabilitySettings`<sup>Required</sup> <a name="protectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.protectionCapabilitySettings"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList getProtectionCapabilitySettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies">requestCookies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestCookies`<sup>Required</sup> <a name="requestCookies" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies"></a>

```java
public java.util.List<java.lang.String> getRequestCookies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionName">actionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold">collaborativeActionThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights">collaborativeWeights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions">exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionName"></a>

```java
public java.lang.String getActionName();
```

- *Type:* java.lang.String

---

##### `collaborativeActionThreshold`<sup>Required</sup> <a name="collaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold"></a>

```java
public java.lang.Number getCollaborativeActionThreshold();
```

- *Type:* java.lang.Number

---

##### `collaborativeWeights`<sup>Required</sup> <a name="collaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList getCollaborativeWeights();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList getExclusions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList</a>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods">allowedHttpMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength">maxHttpRequestHeaderLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders">maxHttpRequestHeaders</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments">maxNumberOfArguments</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength">maxSingleArgumentLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength">maxTotalArgumentLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedHttpMethods`<sup>Required</sup> <a name="allowedHttpMethods" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedHttpMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxHttpRequestHeaderLength`<sup>Required</sup> <a name="maxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength"></a>

```java
public java.lang.Number getMaxHttpRequestHeaderLength();
```

- *Type:* java.lang.Number

---

##### `maxHttpRequestHeaders`<sup>Required</sup> <a name="maxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders"></a>

```java
public java.lang.Number getMaxHttpRequestHeaders();
```

- *Type:* java.lang.Number

---

##### `maxNumberOfArguments`<sup>Required</sup> <a name="maxNumberOfArguments" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments"></a>

```java
public java.lang.Number getMaxNumberOfArguments();
```

- *Type:* java.lang.Number

---

##### `maxSingleArgumentLength`<sup>Required</sup> <a name="maxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength"></a>

```java
public java.lang.Number getMaxSingleArgumentLength();
```

- *Type:* java.lang.Number

---

##### `maxTotalArgumentLength`<sup>Required</sup> <a name="maxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength"></a>

```java
public java.lang.Number getMaxTotalArgumentLength();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.get"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_web_app_firewall_policies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference;

new DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.items"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.internalValue"></a>

```java
public DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection</a>

---



