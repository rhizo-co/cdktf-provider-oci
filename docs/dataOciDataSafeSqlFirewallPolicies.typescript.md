# `dataOciDataSafeSqlFirewallPolicies` Submodule <a name="`dataOciDataSafeSqlFirewallPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlFirewallPolicies <a name="DataOciDataSafeSqlFirewallPolicies" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies oci_data_safe_sql_firewall_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies(scope: Construct, id: string, config: DataOciDataSafeSqlFirewallPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig">DataOciDataSafeSqlFirewallPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig">DataOciDataSafeSqlFirewallPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetDbUserName">resetDbUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetSecurityPolicyId">resetSecurityPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetSqlFirewallPolicyId">resetSqlFirewallPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetTimeCreatedGreaterThanOrEqualTo">resetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetTimeCreatedLessThan">resetTimeCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetViolationAction">resetViolationAction</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSqlFirewallPoliciesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter">DataOciDataSafeSqlFirewallPoliciesFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDbUserName` <a name="resetDbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetDbUserName"></a>

```typescript
public resetDbUserName(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSecurityPolicyId` <a name="resetSecurityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetSecurityPolicyId"></a>

```typescript
public resetSecurityPolicyId(): void
```

##### `resetSqlFirewallPolicyId` <a name="resetSqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetSqlFirewallPolicyId"></a>

```typescript
public resetSqlFirewallPolicyId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeCreatedGreaterThanOrEqualTo` <a name="resetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetTimeCreatedGreaterThanOrEqualTo"></a>

```typescript
public resetTimeCreatedGreaterThanOrEqualTo(): void
```

##### `resetTimeCreatedLessThan` <a name="resetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetTimeCreatedLessThan"></a>

```typescript
public resetTimeCreatedLessThan(): void
```

##### `resetViolationAction` <a name="resetViolationAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.resetViolationAction"></a>

```typescript
public resetViolationAction(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlFirewallPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isConstruct"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSqlFirewallPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSqlFirewallPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSqlFirewallPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlFirewallPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList">DataOciDataSafeSqlFirewallPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.sqlFirewallPolicyCollection">sqlFirewallPolicyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList">DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.dbUserNameInput">dbUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter">DataOciDataSafeSqlFirewallPoliciesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.securityPolicyIdInput">securityPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.sqlFirewallPolicyIdInput">sqlFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.timeCreatedGreaterThanOrEqualToInput">timeCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.timeCreatedLessThanInput">timeCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.violationActionInput">violationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.dbUserName">dbUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.securityPolicyId">securityPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.sqlFirewallPolicyId">sqlFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.violationAction">violationAction</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSqlFirewallPoliciesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList">DataOciDataSafeSqlFirewallPoliciesFilterList</a>

---

##### `sqlFirewallPolicyCollection`<sup>Required</sup> <a name="sqlFirewallPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.sqlFirewallPolicyCollection"></a>

```typescript
public readonly sqlFirewallPolicyCollection: DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList">DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dbUserNameInput`<sup>Optional</sup> <a name="dbUserNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.dbUserNameInput"></a>

```typescript
public readonly dbUserNameInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSqlFirewallPoliciesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter">DataOciDataSafeSqlFirewallPoliciesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `securityPolicyIdInput`<sup>Optional</sup> <a name="securityPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.securityPolicyIdInput"></a>

```typescript
public readonly securityPolicyIdInput: string;
```

- *Type:* string

---

##### `sqlFirewallPolicyIdInput`<sup>Optional</sup> <a name="sqlFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.sqlFirewallPolicyIdInput"></a>

```typescript
public readonly sqlFirewallPolicyIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.timeCreatedGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeCreatedLessThanInput`<sup>Optional</sup> <a name="timeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.timeCreatedLessThanInput"></a>

```typescript
public readonly timeCreatedLessThanInput: string;
```

- *Type:* string

---

##### `violationActionInput`<sup>Optional</sup> <a name="violationActionInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.violationActionInput"></a>

```typescript
public readonly violationActionInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dbUserName`<sup>Required</sup> <a name="dbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.dbUserName"></a>

```typescript
public readonly dbUserName: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `securityPolicyId`<sup>Required</sup> <a name="securityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.securityPolicyId"></a>

```typescript
public readonly securityPolicyId: string;
```

- *Type:* string

---

##### `sqlFirewallPolicyId`<sup>Required</sup> <a name="sqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.sqlFirewallPolicyId"></a>

```typescript
public readonly sqlFirewallPolicyId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeCreatedLessThan`<sup>Required</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

---

##### `violationAction`<sup>Required</sup> <a name="violationAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.violationAction"></a>

```typescript
public readonly violationAction: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlFirewallPoliciesConfig <a name="DataOciDataSafeSqlFirewallPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallPoliciesConfig: dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#compartment_id DataOciDataSafeSqlFirewallPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#access_level DataOciDataSafeSqlFirewallPolicies#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#compartment_id_in_subtree DataOciDataSafeSqlFirewallPolicies#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.dbUserName">dbUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#db_user_name DataOciDataSafeSqlFirewallPolicies#db_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#display_name DataOciDataSafeSqlFirewallPolicies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter">DataOciDataSafeSqlFirewallPoliciesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#id DataOciDataSafeSqlFirewallPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.securityPolicyId">securityPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#security_policy_id DataOciDataSafeSqlFirewallPolicies#security_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.sqlFirewallPolicyId">sqlFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#sql_firewall_policy_id DataOciDataSafeSqlFirewallPolicies#sql_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#state DataOciDataSafeSqlFirewallPolicies#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#time_created_greater_than_or_equal_to DataOciDataSafeSqlFirewallPolicies#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#time_created_less_than DataOciDataSafeSqlFirewallPolicies#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.violationAction">violationAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#violation_action DataOciDataSafeSqlFirewallPolicies#violation_action}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#compartment_id DataOciDataSafeSqlFirewallPolicies#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#access_level DataOciDataSafeSqlFirewallPolicies#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#compartment_id_in_subtree DataOciDataSafeSqlFirewallPolicies#compartment_id_in_subtree}.

---

##### `dbUserName`<sup>Optional</sup> <a name="dbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.dbUserName"></a>

```typescript
public readonly dbUserName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#db_user_name DataOciDataSafeSqlFirewallPolicies#db_user_name}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#display_name DataOciDataSafeSqlFirewallPolicies#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSqlFirewallPoliciesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter">DataOciDataSafeSqlFirewallPoliciesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#filter DataOciDataSafeSqlFirewallPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#id DataOciDataSafeSqlFirewallPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securityPolicyId`<sup>Optional</sup> <a name="securityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.securityPolicyId"></a>

```typescript
public readonly securityPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#security_policy_id DataOciDataSafeSqlFirewallPolicies#security_policy_id}.

---

##### `sqlFirewallPolicyId`<sup>Optional</sup> <a name="sqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.sqlFirewallPolicyId"></a>

```typescript
public readonly sqlFirewallPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#sql_firewall_policy_id DataOciDataSafeSqlFirewallPolicies#sql_firewall_policy_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#state DataOciDataSafeSqlFirewallPolicies#state}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#time_created_greater_than_or_equal_to DataOciDataSafeSqlFirewallPolicies#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#time_created_less_than DataOciDataSafeSqlFirewallPolicies#time_created_less_than}.

---

##### `violationAction`<sup>Optional</sup> <a name="violationAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesConfig.property.violationAction"></a>

```typescript
public readonly violationAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#violation_action DataOciDataSafeSqlFirewallPolicies#violation_action}.

---

### DataOciDataSafeSqlFirewallPoliciesFilter <a name="DataOciDataSafeSqlFirewallPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallPoliciesFilter: dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#name DataOciDataSafeSqlFirewallPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#values DataOciDataSafeSqlFirewallPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#regex DataOciDataSafeSqlFirewallPolicies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#name DataOciDataSafeSqlFirewallPolicies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#values DataOciDataSafeSqlFirewallPolicies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policies#regex DataOciDataSafeSqlFirewallPolicies#regex}.

---

### DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection <a name="DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection: dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection = { ... }
```


### DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems <a name="DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems: dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlFirewallPoliciesFilterList <a name="DataOciDataSafeSqlFirewallPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlFirewallPoliciesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter">DataOciDataSafeSqlFirewallPoliciesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSqlFirewallPoliciesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter">DataOciDataSafeSqlFirewallPoliciesFilter</a>[]

---


### DataOciDataSafeSqlFirewallPoliciesFilterOutputReference <a name="DataOciDataSafeSqlFirewallPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter">DataOciDataSafeSqlFirewallPoliciesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSqlFirewallPoliciesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesFilter">DataOciDataSafeSqlFirewallPoliciesFilter</a>

---


### DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList <a name="DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference <a name="DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.allowedClientIps">allowedClientIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.allowedClientOsUsernames">allowedClientOsUsernames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.allowedClientPrograms">allowedClientPrograms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.dbUserName">dbUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.enforcementScope">enforcementScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.securityPolicyId">securityPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.sqlFirewallPolicyId">sqlFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.sqlLevel">sqlLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.violationAction">violationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.violationAudit">violationAudit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems">DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedClientIps`<sup>Required</sup> <a name="allowedClientIps" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.allowedClientIps"></a>

```typescript
public readonly allowedClientIps: string[];
```

- *Type:* string[]

---

##### `allowedClientOsUsernames`<sup>Required</sup> <a name="allowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.allowedClientOsUsernames"></a>

```typescript
public readonly allowedClientOsUsernames: string[];
```

- *Type:* string[]

---

##### `allowedClientPrograms`<sup>Required</sup> <a name="allowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.allowedClientPrograms"></a>

```typescript
public readonly allowedClientPrograms: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dbUserName`<sup>Required</sup> <a name="dbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.dbUserName"></a>

```typescript
public readonly dbUserName: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enforcementScope`<sup>Required</sup> <a name="enforcementScope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.enforcementScope"></a>

```typescript
public readonly enforcementScope: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `securityPolicyId`<sup>Required</sup> <a name="securityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.securityPolicyId"></a>

```typescript
public readonly securityPolicyId: string;
```

- *Type:* string

---

##### `sqlFirewallPolicyId`<sup>Required</sup> <a name="sqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.sqlFirewallPolicyId"></a>

```typescript
public readonly sqlFirewallPolicyId: string;
```

- *Type:* string

---

##### `sqlLevel`<sup>Required</sup> <a name="sqlLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.sqlLevel"></a>

```typescript
public readonly sqlLevel: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `violationAction`<sup>Required</sup> <a name="violationAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.violationAction"></a>

```typescript
public readonly violationAction: string;
```

- *Type:* string

---

##### `violationAudit`<sup>Required</sup> <a name="violationAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.violationAudit"></a>

```typescript
public readonly violationAudit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems">DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItems</a>

---


### DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList <a name="DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference <a name="DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList">DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection">DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList">DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicies.DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection">DataOciDataSafeSqlFirewallPoliciesSqlFirewallPolicyCollection</a>

---



