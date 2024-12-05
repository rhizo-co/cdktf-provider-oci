# `dataOciDataSafeSqlFirewallPolicyAnalytics` Submodule <a name="`dataOciDataSafeSqlFirewallPolicyAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlFirewallPolicyAnalytics <a name="DataOciDataSafeSqlFirewallPolicyAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics oci_data_safe_sql_firewall_policy_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicyAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics(scope: Construct, id: string, config: DataOciDataSafeSqlFirewallPolicyAnalyticsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig">DataOciDataSafeSqlFirewallPolicyAnalyticsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig">DataOciDataSafeSqlFirewallPolicyAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetSecurityPolicyId">resetSecurityPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetTimeEnded">resetTimeEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetTimeStarted">resetTimeStarted</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSqlFirewallPolicyAnalyticsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSecurityPolicyId` <a name="resetSecurityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetSecurityPolicyId"></a>

```typescript
public resetSecurityPolicyId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeEnded` <a name="resetTimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetTimeEnded"></a>

```typescript
public resetTimeEnded(): void
```

##### `resetTimeStarted` <a name="resetTimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetTimeStarted"></a>

```typescript
public resetTimeStarted(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlFirewallPolicyAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isConstruct"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicyAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicyAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicyAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicyAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSqlFirewallPolicyAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSqlFirewallPolicyAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSqlFirewallPolicyAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlFirewallPolicyAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList">DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.sqlFirewallPolicyAnalyticsCollection">sqlFirewallPolicyAnalyticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.groupByInput">groupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.securityPolicyIdInput">securityPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeEndedInput">timeEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeStartedInput">timeStartedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.groupBy">groupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.securityPolicyId">securityPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList">DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList</a>

---

##### `sqlFirewallPolicyAnalyticsCollection`<sup>Required</sup> <a name="sqlFirewallPolicyAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.sqlFirewallPolicyAnalyticsCollection"></a>

```typescript
public readonly sqlFirewallPolicyAnalyticsCollection: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSqlFirewallPolicyAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>[]

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.groupByInput"></a>

```typescript
public readonly groupByInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `securityPolicyIdInput`<sup>Optional</sup> <a name="securityPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.securityPolicyIdInput"></a>

```typescript
public readonly securityPolicyIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeEndedInput`<sup>Optional</sup> <a name="timeEndedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeEndedInput"></a>

```typescript
public readonly timeEndedInput: string;
```

- *Type:* string

---

##### `timeStartedInput`<sup>Optional</sup> <a name="timeStartedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeStartedInput"></a>

```typescript
public readonly timeStartedInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `securityPolicyId`<sup>Required</sup> <a name="securityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.securityPolicyId"></a>

```typescript
public readonly securityPolicyId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlFirewallPolicyAnalyticsConfig <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicyAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallPolicyAnalyticsConfig: dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#compartment_id DataOciDataSafeSqlFirewallPolicyAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#access_level DataOciDataSafeSqlFirewallPolicyAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallPolicyAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.groupBy">groupBy</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#group_by DataOciDataSafeSqlFirewallPolicyAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#id DataOciDataSafeSqlFirewallPolicyAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.securityPolicyId">securityPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#security_policy_id DataOciDataSafeSqlFirewallPolicyAnalytics#security_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#state DataOciDataSafeSqlFirewallPolicyAnalytics#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.timeEnded">timeEnded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#time_ended DataOciDataSafeSqlFirewallPolicyAnalytics#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.timeStarted">timeStarted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#time_started DataOciDataSafeSqlFirewallPolicyAnalytics#time_started}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#compartment_id DataOciDataSafeSqlFirewallPolicyAnalytics#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#access_level DataOciDataSafeSqlFirewallPolicyAnalytics#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallPolicyAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSqlFirewallPolicyAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#filter DataOciDataSafeSqlFirewallPolicyAnalytics#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#group_by DataOciDataSafeSqlFirewallPolicyAnalytics#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#id DataOciDataSafeSqlFirewallPolicyAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securityPolicyId`<sup>Optional</sup> <a name="securityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.securityPolicyId"></a>

```typescript
public readonly securityPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#security_policy_id DataOciDataSafeSqlFirewallPolicyAnalytics#security_policy_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#state DataOciDataSafeSqlFirewallPolicyAnalytics#state}.

---

##### `timeEnded`<sup>Optional</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#time_ended DataOciDataSafeSqlFirewallPolicyAnalytics#time_ended}.

---

##### `timeStarted`<sup>Optional</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#time_started DataOciDataSafeSqlFirewallPolicyAnalytics#time_started}.

---

### DataOciDataSafeSqlFirewallPolicyAnalyticsFilter <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicyAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallPolicyAnalyticsFilter: dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#name DataOciDataSafeSqlFirewallPolicyAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#values DataOciDataSafeSqlFirewallPolicyAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#regex DataOciDataSafeSqlFirewallPolicyAnalytics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#name DataOciDataSafeSqlFirewallPolicyAnalytics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#values DataOciDataSafeSqlFirewallPolicyAnalytics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#regex DataOciDataSafeSqlFirewallPolicyAnalytics#regex}.

---

### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicyAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection: dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection = { ... }
```


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicyAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems: dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems = { ... }
```


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicyAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions: dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicyAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSqlFirewallPolicyAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>[]

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicyAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSqlFirewallPolicyAnalyticsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicyAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicyAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.enforcementScope">enforcementScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.securityPolicyId">securityPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.violationAction">violationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforcementScope`<sup>Required</sup> <a name="enforcementScope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.enforcementScope"></a>

```typescript
public readonly enforcementScope: string;
```

- *Type:* string

---

##### `securityPolicyId`<sup>Required</sup> <a name="securityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.securityPolicyId"></a>

```typescript
public readonly securityPolicyId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `violationAction`<sup>Required</sup> <a name="violationAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.violationAction"></a>

```typescript
public readonly violationAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions</a>

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicyAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicyAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.sqlFirewallPolicyAnalyticCount">sqlFirewallPolicyAnalyticCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList</a>

---

##### `sqlFirewallPolicyAnalyticCount`<sup>Required</sup> <a name="sqlFirewallPolicyAnalyticCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.sqlFirewallPolicyAnalyticCount"></a>

```typescript
public readonly sqlFirewallPolicyAnalyticCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems</a>

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicyAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicyAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection</a>

---



