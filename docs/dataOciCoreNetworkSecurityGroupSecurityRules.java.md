# `dataOciCoreNetworkSecurityGroupSecurityRules` Submodule <a name="`dataOciCoreNetworkSecurityGroupSecurityRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreNetworkSecurityGroupSecurityRules <a name="DataOciCoreNetworkSecurityGroupSecurityRules" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules oci_core_network_security_group_security_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRules;

DataOciCoreNetworkSecurityGroupSecurityRules.Builder.create(Construct scope, java.lang.String id)
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
    .networkSecurityGroupId(java.lang.String)
//  .direction(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreNetworkSecurityGroupSecurityRulesFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#network_security_group_id DataOciCoreNetworkSecurityGroupSecurityRules#network_security_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#direction DataOciCoreNetworkSecurityGroupSecurityRules#direction}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#id DataOciCoreNetworkSecurityGroupSecurityRules#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.networkSecurityGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#network_security_group_id DataOciCoreNetworkSecurityGroupSecurityRules#network_security_group_id}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#direction DataOciCoreNetworkSecurityGroupSecurityRules#direction}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#filter DataOciCoreNetworkSecurityGroupSecurityRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#id DataOciCoreNetworkSecurityGroupSecurityRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCoreNetworkSecurityGroupSecurityRulesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>>

---

##### `resetDirection` <a name="resetDirection" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreNetworkSecurityGroupSecurityRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRules;

DataOciCoreNetworkSecurityGroupSecurityRules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRules;

DataOciCoreNetworkSecurityGroupSecurityRules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRules;

DataOciCoreNetworkSecurityGroupSecurityRules.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRules;

DataOciCoreNetworkSecurityGroupSecurityRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreNetworkSecurityGroupSecurityRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreNetworkSecurityGroupSecurityRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreNetworkSecurityGroupSecurityRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreNetworkSecurityGroupSecurityRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreNetworkSecurityGroupSecurityRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList">DataOciCoreNetworkSecurityGroupSecurityRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.securityRules">securityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.networkSecurityGroupIdInput">networkSecurityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.filter"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList">DataOciCoreNetworkSecurityGroupSecurityRulesFilterList</a>

---

##### `securityRules`<sup>Required</sup> <a name="securityRules" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.securityRules"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList getSecurityRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networkSecurityGroupIdInput`<sup>Optional</sup> <a name="networkSecurityGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.networkSecurityGroupIdInput"></a>

```java
public java.lang.String getNetworkSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.networkSecurityGroupId"></a>

```java
public java.lang.String getNetworkSecurityGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreNetworkSecurityGroupSecurityRulesConfig <a name="DataOciCoreNetworkSecurityGroupSecurityRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig;

DataOciCoreNetworkSecurityGroupSecurityRulesConfig.builder()
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
    .networkSecurityGroupId(java.lang.String)
//  .direction(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreNetworkSecurityGroupSecurityRulesFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#network_security_group_id DataOciCoreNetworkSecurityGroupSecurityRules#network_security_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#direction DataOciCoreNetworkSecurityGroupSecurityRules#direction}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#id DataOciCoreNetworkSecurityGroupSecurityRules#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.networkSecurityGroupId"></a>

```java
public java.lang.String getNetworkSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#network_security_group_id DataOciCoreNetworkSecurityGroupSecurityRules#network_security_group_id}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#direction DataOciCoreNetworkSecurityGroupSecurityRules#direction}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#filter DataOciCoreNetworkSecurityGroupSecurityRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#id DataOciCoreNetworkSecurityGroupSecurityRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreNetworkSecurityGroupSecurityRulesFilter <a name="DataOciCoreNetworkSecurityGroupSecurityRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter;

DataOciCoreNetworkSecurityGroupSecurityRulesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#name DataOciCoreNetworkSecurityGroupSecurityRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#values DataOciCoreNetworkSecurityGroupSecurityRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#regex DataOciCoreNetworkSecurityGroupSecurityRules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#name DataOciCoreNetworkSecurityGroupSecurityRules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#values DataOciCoreNetworkSecurityGroupSecurityRules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#regex DataOciCoreNetworkSecurityGroupSecurityRules#regex}.

---

### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules;

DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules.builder()
    .build();
```


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions;

DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions.builder()
    .build();
```


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions;

DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions.builder()
    .build();
```


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange;

DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange.builder()
    .build();
```


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange;

DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange.builder()
    .build();
```


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions;

DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions.builder()
    .build();
```


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange;

DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange.builder()
    .build();
```


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange;

DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreNetworkSecurityGroupSecurityRulesFilterList <a name="DataOciCoreNetworkSecurityGroupSecurityRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList;

new DataOciCoreNetworkSecurityGroupSecurityRulesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.get"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>>

---


### DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference <a name="DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference;

new DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList;

new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.get"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference;

new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions</a>

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList;

new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.get"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference;

new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.isValid">isValid</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.stateless">stateless</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `icmpOptions`<sup>Required</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.icmpOptions"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList getIcmpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isValid`<sup>Required</sup> <a name="isValid" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.isValid"></a>

```java
public IResolvable getIsValid();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `stateless`<sup>Required</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.stateless"></a>

```java
public IResolvable getStateless();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `tcpOptions`<sup>Required</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.tcpOptions"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList getTcpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `udpOptions`<sup>Required</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.udpOptions"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList getUdpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.internalValue"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules</a>

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList;

new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.get"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference;

new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange</a>

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList;

new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.get"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference;

new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.destinationPortRange"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList getDestinationPortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions</a>

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList;

new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.get"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference;

new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange</a>

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList;

new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.get"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference;

new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange</a>

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList;

new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.get"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference;

new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.destinationPortRange"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList getDestinationPortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions</a>

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList;

new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.get"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_security_rules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference;

new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```java
public DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange</a>

---



