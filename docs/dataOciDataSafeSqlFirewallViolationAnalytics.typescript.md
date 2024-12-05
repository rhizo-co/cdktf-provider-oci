# `dataOciDataSafeSqlFirewallViolationAnalytics` Submodule <a name="`dataOciDataSafeSqlFirewallViolationAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlFirewallViolationAnalytics <a name="DataOciDataSafeSqlFirewallViolationAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics oci_data_safe_sql_firewall_violation_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallViolationAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics(scope: Construct, id: string, config: DataOciDataSafeSqlFirewallViolationAnalyticsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig">DataOciDataSafeSqlFirewallViolationAnalyticsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig">DataOciDataSafeSqlFirewallViolationAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetQueryTimeZone">resetQueryTimeZone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetScimQuery">resetScimQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetSummaryField">resetSummaryField</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetTimeEnded">resetTimeEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetTimeStarted">resetTimeStarted</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSqlFirewallViolationAnalyticsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetId"></a>

```typescript
public resetId(): void
```

##### `resetQueryTimeZone` <a name="resetQueryTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetQueryTimeZone"></a>

```typescript
public resetQueryTimeZone(): void
```

##### `resetScimQuery` <a name="resetScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetScimQuery"></a>

```typescript
public resetScimQuery(): void
```

##### `resetSummaryField` <a name="resetSummaryField" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetSummaryField"></a>

```typescript
public resetSummaryField(): void
```

##### `resetTimeEnded` <a name="resetTimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetTimeEnded"></a>

```typescript
public resetTimeEnded(): void
```

##### `resetTimeStarted` <a name="resetTimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.resetTimeStarted"></a>

```typescript
public resetTimeStarted(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlFirewallViolationAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isConstruct"></a>

```typescript
import { dataOciDataSafeSqlFirewallViolationAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSqlFirewallViolationAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSqlFirewallViolationAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSqlFirewallViolationAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSqlFirewallViolationAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSqlFirewallViolationAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSqlFirewallViolationAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlFirewallViolationAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList">DataOciDataSafeSqlFirewallViolationAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.sqlFirewallViolationAnalyticsCollection">sqlFirewallViolationAnalyticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.groupByInput">groupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.queryTimeZoneInput">queryTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.scimQueryInput">scimQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.summaryFieldInput">summaryFieldInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeEndedInput">timeEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeStartedInput">timeStartedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.groupBy">groupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.queryTimeZone">queryTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.scimQuery">scimQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.summaryField">summaryField</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSqlFirewallViolationAnalyticsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList">DataOciDataSafeSqlFirewallViolationAnalyticsFilterList</a>

---

##### `sqlFirewallViolationAnalyticsCollection`<sup>Required</sup> <a name="sqlFirewallViolationAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.sqlFirewallViolationAnalyticsCollection"></a>

```typescript
public readonly sqlFirewallViolationAnalyticsCollection: DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSqlFirewallViolationAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a>[]

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.groupByInput"></a>

```typescript
public readonly groupByInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `queryTimeZoneInput`<sup>Optional</sup> <a name="queryTimeZoneInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.queryTimeZoneInput"></a>

```typescript
public readonly queryTimeZoneInput: string;
```

- *Type:* string

---

##### `scimQueryInput`<sup>Optional</sup> <a name="scimQueryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.scimQueryInput"></a>

```typescript
public readonly scimQueryInput: string;
```

- *Type:* string

---

##### `summaryFieldInput`<sup>Optional</sup> <a name="summaryFieldInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.summaryFieldInput"></a>

```typescript
public readonly summaryFieldInput: string[];
```

- *Type:* string[]

---

##### `timeEndedInput`<sup>Optional</sup> <a name="timeEndedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeEndedInput"></a>

```typescript
public readonly timeEndedInput: string;
```

- *Type:* string

---

##### `timeStartedInput`<sup>Optional</sup> <a name="timeStartedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeStartedInput"></a>

```typescript
public readonly timeStartedInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `queryTimeZone`<sup>Required</sup> <a name="queryTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.queryTimeZone"></a>

```typescript
public readonly queryTimeZone: string;
```

- *Type:* string

---

##### `scimQuery`<sup>Required</sup> <a name="scimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.scimQuery"></a>

```typescript
public readonly scimQuery: string;
```

- *Type:* string

---

##### `summaryField`<sup>Required</sup> <a name="summaryField" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.summaryField"></a>

```typescript
public readonly summaryField: string[];
```

- *Type:* string[]

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalytics.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlFirewallViolationAnalyticsConfig <a name="DataOciDataSafeSqlFirewallViolationAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallViolationAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallViolationAnalyticsConfig: dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#compartment_id DataOciDataSafeSqlFirewallViolationAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#access_level DataOciDataSafeSqlFirewallViolationAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallViolationAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.groupBy">groupBy</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#group_by DataOciDataSafeSqlFirewallViolationAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#id DataOciDataSafeSqlFirewallViolationAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.queryTimeZone">queryTimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#query_time_zone DataOciDataSafeSqlFirewallViolationAnalytics#query_time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.scimQuery">scimQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#scim_query DataOciDataSafeSqlFirewallViolationAnalytics#scim_query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.summaryField">summaryField</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#summary_field DataOciDataSafeSqlFirewallViolationAnalytics#summary_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.timeEnded">timeEnded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#time_ended DataOciDataSafeSqlFirewallViolationAnalytics#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.timeStarted">timeStarted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#time_started DataOciDataSafeSqlFirewallViolationAnalytics#time_started}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#compartment_id DataOciDataSafeSqlFirewallViolationAnalytics#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#access_level DataOciDataSafeSqlFirewallViolationAnalytics#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallViolationAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSqlFirewallViolationAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#filter DataOciDataSafeSqlFirewallViolationAnalytics#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#group_by DataOciDataSafeSqlFirewallViolationAnalytics#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#id DataOciDataSafeSqlFirewallViolationAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryTimeZone`<sup>Optional</sup> <a name="queryTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.queryTimeZone"></a>

```typescript
public readonly queryTimeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#query_time_zone DataOciDataSafeSqlFirewallViolationAnalytics#query_time_zone}.

---

##### `scimQuery`<sup>Optional</sup> <a name="scimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.scimQuery"></a>

```typescript
public readonly scimQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#scim_query DataOciDataSafeSqlFirewallViolationAnalytics#scim_query}.

---

##### `summaryField`<sup>Optional</sup> <a name="summaryField" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.summaryField"></a>

```typescript
public readonly summaryField: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#summary_field DataOciDataSafeSqlFirewallViolationAnalytics#summary_field}.

---

##### `timeEnded`<sup>Optional</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#time_ended DataOciDataSafeSqlFirewallViolationAnalytics#time_ended}.

---

##### `timeStarted`<sup>Optional</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsConfig.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#time_started DataOciDataSafeSqlFirewallViolationAnalytics#time_started}.

---

### DataOciDataSafeSqlFirewallViolationAnalyticsFilter <a name="DataOciDataSafeSqlFirewallViolationAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallViolationAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallViolationAnalyticsFilter: dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#name DataOciDataSafeSqlFirewallViolationAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#values DataOciDataSafeSqlFirewallViolationAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#regex DataOciDataSafeSqlFirewallViolationAnalytics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#name DataOciDataSafeSqlFirewallViolationAnalytics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#values DataOciDataSafeSqlFirewallViolationAnalytics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_violation_analytics#regex DataOciDataSafeSqlFirewallViolationAnalytics#regex}.

---

### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallViolationAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection: dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection = { ... }
```


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallViolationAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems: dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems = { ... }
```


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallViolationAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions: dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlFirewallViolationAnalyticsFilterList <a name="DataOciDataSafeSqlFirewallViolationAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallViolationAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSqlFirewallViolationAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a>[]

---


### DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference <a name="DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallViolationAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSqlFirewallViolationAnalyticsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsFilter">DataOciDataSafeSqlFirewallViolationAnalyticsFilter</a>

---


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallViolationAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallViolationAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.clientIp">clientIp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.clientOsUserName">clientOsUserName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.clientProgram">clientProgram</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.dbUserName">dbUserName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.operation">operation</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.operationTime">operationTime</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.sqlLevel">sqlLevel</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.targetId">targetId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.targetName">targetName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.violationAction">violationAction</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.violationCause">violationCause</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIp`<sup>Required</sup> <a name="clientIp" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.clientIp"></a>

```typescript
public readonly clientIp: string[];
```

- *Type:* string[]

---

##### `clientOsUserName`<sup>Required</sup> <a name="clientOsUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.clientOsUserName"></a>

```typescript
public readonly clientOsUserName: string[];
```

- *Type:* string[]

---

##### `clientProgram`<sup>Required</sup> <a name="clientProgram" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.clientProgram"></a>

```typescript
public readonly clientProgram: string[];
```

- *Type:* string[]

---

##### `dbUserName`<sup>Required</sup> <a name="dbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.dbUserName"></a>

```typescript
public readonly dbUserName: string[];
```

- *Type:* string[]

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.operation"></a>

```typescript
public readonly operation: string[];
```

- *Type:* string[]

---

##### `operationTime`<sup>Required</sup> <a name="operationTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.operationTime"></a>

```typescript
public readonly operationTime: string[];
```

- *Type:* string[]

---

##### `sqlLevel`<sup>Required</sup> <a name="sqlLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.sqlLevel"></a>

```typescript
public readonly sqlLevel: string[];
```

- *Type:* string[]

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string[];
```

- *Type:* string[]

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.targetName"></a>

```typescript
public readonly targetName: string[];
```

- *Type:* string[]

---

##### `violationAction`<sup>Required</sup> <a name="violationAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.violationAction"></a>

```typescript
public readonly violationAction: string[];
```

- *Type:* string[]

---

##### `violationCause`<sup>Required</sup> <a name="violationCause" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.violationCause"></a>

```typescript
public readonly violationCause: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensions</a>

---


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallViolationAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallViolationAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.sqlFirewallViolationAnalyticCount">sqlFirewallViolationAnalyticCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsDimensionsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `sqlFirewallViolationAnalyticCount`<sup>Required</sup> <a name="sqlFirewallViolationAnalyticCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.sqlFirewallViolationAnalyticCount"></a>

```typescript
public readonly sqlFirewallViolationAnalyticCount: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItems</a>

---


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallViolationAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference <a name="DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallViolationAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallViolationAnalytics.DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection">DataOciDataSafeSqlFirewallViolationAnalyticsSqlFirewallViolationAnalyticsCollection</a>

---



