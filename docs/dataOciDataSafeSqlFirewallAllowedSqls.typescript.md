# `dataOciDataSafeSqlFirewallAllowedSqls` Submodule <a name="`dataOciDataSafeSqlFirewallAllowedSqls` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlFirewallAllowedSqls <a name="DataOciDataSafeSqlFirewallAllowedSqls" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls oci_data_safe_sql_firewall_allowed_sqls}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqls } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls(scope: Construct, id: string, config: DataOciDataSafeSqlFirewallAllowedSqlsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig">DataOciDataSafeSqlFirewallAllowedSqlsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig">DataOciDataSafeSqlFirewallAllowedSqlsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetScimQuery">resetScimQuery</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSqlFirewallAllowedSqlsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetId"></a>

```typescript
public resetId(): void
```

##### `resetScimQuery` <a name="resetScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetScimQuery"></a>

```typescript
public resetScimQuery(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlFirewallAllowedSqls resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isConstruct"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqls } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqls } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqls } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqls } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSqlFirewallAllowedSqls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSqlFirewallAllowedSqls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSqlFirewallAllowedSqls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlFirewallAllowedSqls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList">DataOciDataSafeSqlFirewallAllowedSqlsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.sqlFirewallAllowedSqlCollection">sqlFirewallAllowedSqlCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.scimQueryInput">scimQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.scimQuery">scimQuery</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSqlFirewallAllowedSqlsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList">DataOciDataSafeSqlFirewallAllowedSqlsFilterList</a>

---

##### `sqlFirewallAllowedSqlCollection`<sup>Required</sup> <a name="sqlFirewallAllowedSqlCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.sqlFirewallAllowedSqlCollection"></a>

```typescript
public readonly sqlFirewallAllowedSqlCollection: DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSqlFirewallAllowedSqlsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `scimQueryInput`<sup>Optional</sup> <a name="scimQueryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.scimQueryInput"></a>

```typescript
public readonly scimQueryInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scimQuery`<sup>Required</sup> <a name="scimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.scimQuery"></a>

```typescript
public readonly scimQuery: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlFirewallAllowedSqlsConfig <a name="DataOciDataSafeSqlFirewallAllowedSqlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqls } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallAllowedSqlsConfig: dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#compartment_id DataOciDataSafeSqlFirewallAllowedSqls#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#access_level DataOciDataSafeSqlFirewallAllowedSqls#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#compartment_id_in_subtree DataOciDataSafeSqlFirewallAllowedSqls#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#id DataOciDataSafeSqlFirewallAllowedSqls#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.scimQuery">scimQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#scim_query DataOciDataSafeSqlFirewallAllowedSqls#scim_query}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#compartment_id DataOciDataSafeSqlFirewallAllowedSqls#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#access_level DataOciDataSafeSqlFirewallAllowedSqls#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#compartment_id_in_subtree DataOciDataSafeSqlFirewallAllowedSqls#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSqlFirewallAllowedSqlsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#filter DataOciDataSafeSqlFirewallAllowedSqls#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#id DataOciDataSafeSqlFirewallAllowedSqls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scimQuery`<sup>Optional</sup> <a name="scimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.scimQuery"></a>

```typescript
public readonly scimQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#scim_query DataOciDataSafeSqlFirewallAllowedSqls#scim_query}.

---

### DataOciDataSafeSqlFirewallAllowedSqlsFilter <a name="DataOciDataSafeSqlFirewallAllowedSqlsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqls } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallAllowedSqlsFilter: dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#name DataOciDataSafeSqlFirewallAllowedSqls#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#values DataOciDataSafeSqlFirewallAllowedSqls#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#regex DataOciDataSafeSqlFirewallAllowedSqls#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#name DataOciDataSafeSqlFirewallAllowedSqls#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#values DataOciDataSafeSqlFirewallAllowedSqls#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#regex DataOciDataSafeSqlFirewallAllowedSqls#regex}.

---

### DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection <a name="DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqls } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection: dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection = { ... }
```


### DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems <a name="DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqls } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems: dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlFirewallAllowedSqlsFilterList <a name="DataOciDataSafeSqlFirewallAllowedSqlsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqls } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSqlFirewallAllowedSqlsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>[]

---


### DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqls } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSqlFirewallAllowedSqlsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter">DataOciDataSafeSqlFirewallAllowedSqlsFilter</a>

---


### DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList <a name="DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqls } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqls } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.currentUser">currentUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.dbUserName">dbUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlAccessedObjects">sqlAccessedObjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlFirewallPolicyId">sqlFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlLevel">sqlLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlText">sqlText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.timeCollected">timeCollected</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `currentUser`<sup>Required</sup> <a name="currentUser" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.currentUser"></a>

```typescript
public readonly currentUser: string;
```

- *Type:* string

---

##### `dbUserName`<sup>Required</sup> <a name="dbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.dbUserName"></a>

```typescript
public readonly dbUserName: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sqlAccessedObjects`<sup>Required</sup> <a name="sqlAccessedObjects" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlAccessedObjects"></a>

```typescript
public readonly sqlAccessedObjects: string[];
```

- *Type:* string[]

---

##### `sqlFirewallPolicyId`<sup>Required</sup> <a name="sqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlFirewallPolicyId"></a>

```typescript
public readonly sqlFirewallPolicyId: string;
```

- *Type:* string

---

##### `sqlLevel`<sup>Required</sup> <a name="sqlLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlLevel"></a>

```typescript
public readonly sqlLevel: string;
```

- *Type:* string

---

##### `sqlText`<sup>Required</sup> <a name="sqlText" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlText"></a>

```typescript
public readonly sqlText: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCollected`<sup>Required</sup> <a name="timeCollected" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.timeCollected"></a>

```typescript
public readonly timeCollected: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems</a>

---


### DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList <a name="DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqls } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallAllowedSqls } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection</a>

---



