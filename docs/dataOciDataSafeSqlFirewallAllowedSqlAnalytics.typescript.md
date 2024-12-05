# `dataOciDataSafeSqlFirewallAllowedSqlAnalytics` Submodule <a name="`dataOciDataSafeSqlFirewallAllowedSqlAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlFirewallAllowedSqlAnalytics <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics oci_data_safe_sql_firewall_allowed_sql_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqlAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics(scope: Construct, id: string, config: DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetScimQuery">resetScimQuery</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetId"></a>

```typescript
public resetId(): void
```

##### `resetScimQuery` <a name="resetScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetScimQuery"></a>

```typescript
public resetScimQuery(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlFirewallAllowedSqlAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isConstruct"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqlAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqlAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqlAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqlAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSqlFirewallAllowedSqlAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSqlFirewallAllowedSqlAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSqlFirewallAllowedSqlAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlFirewallAllowedSqlAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.sqlFirewallAllowedSqlAnalyticsCollection">sqlFirewallAllowedSqlAnalyticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.groupByInput">groupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.scimQueryInput">scimQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.groupBy">groupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.scimQuery">scimQuery</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList</a>

---

##### `sqlFirewallAllowedSqlAnalyticsCollection`<sup>Required</sup> <a name="sqlFirewallAllowedSqlAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.sqlFirewallAllowedSqlAnalyticsCollection"></a>

```typescript
public readonly sqlFirewallAllowedSqlAnalyticsCollection: DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>[]

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.groupByInput"></a>

```typescript
public readonly groupByInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `scimQueryInput`<sup>Optional</sup> <a name="scimQueryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.scimQueryInput"></a>

```typescript
public readonly scimQueryInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scimQuery`<sup>Required</sup> <a name="scimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.scimQuery"></a>

```typescript
public readonly scimQuery: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqlAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig: dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#access_level DataOciDataSafeSqlFirewallAllowedSqlAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.groupBy">groupBy</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#group_by DataOciDataSafeSqlFirewallAllowedSqlAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.scimQuery">scimQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#scim_query DataOciDataSafeSqlFirewallAllowedSqlAnalytics#scim_query}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#access_level DataOciDataSafeSqlFirewallAllowedSqlAnalytics#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#filter DataOciDataSafeSqlFirewallAllowedSqlAnalytics#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#group_by DataOciDataSafeSqlFirewallAllowedSqlAnalytics#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scimQuery`<sup>Optional</sup> <a name="scimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.scimQuery"></a>

```typescript
public readonly scimQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#scim_query DataOciDataSafeSqlFirewallAllowedSqlAnalytics#scim_query}.

---

### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqlAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter: dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#name DataOciDataSafeSqlFirewallAllowedSqlAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#values DataOciDataSafeSqlFirewallAllowedSqlAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#regex DataOciDataSafeSqlFirewallAllowedSqlAnalytics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#name DataOciDataSafeSqlFirewallAllowedSqlAnalytics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#values DataOciDataSafeSqlFirewallAllowedSqlAnalytics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#regex DataOciDataSafeSqlFirewallAllowedSqlAnalytics#regex}.

---

### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqlAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection: dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection = { ... }
```


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqlAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems: dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems = { ... }
```


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqlAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions: dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqlAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>[]

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqlAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqlAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqlAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.dbUserName">dbUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.sqlFirewallPolicyId">sqlFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.sqlLevel">sqlLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbUserName`<sup>Required</sup> <a name="dbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.dbUserName"></a>

```typescript
public readonly dbUserName: string;
```

- *Type:* string

---

##### `sqlFirewallPolicyId`<sup>Required</sup> <a name="sqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.sqlFirewallPolicyId"></a>

```typescript
public readonly sqlFirewallPolicyId: string;
```

- *Type:* string

---

##### `sqlLevel`<sup>Required</sup> <a name="sqlLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.sqlLevel"></a>

```typescript
public readonly sqlLevel: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions</a>

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqlAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqlAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.sqlFirewallAllowedSqlAnalyticCount">sqlFirewallAllowedSqlAnalyticCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList</a>

---

##### `sqlFirewallAllowedSqlAnalyticCount`<sup>Required</sup> <a name="sqlFirewallAllowedSqlAnalyticCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.sqlFirewallAllowedSqlAnalyticCount"></a>

```typescript
public readonly sqlFirewallAllowedSqlAnalyticCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems</a>

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqlAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqlAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection</a>

---



